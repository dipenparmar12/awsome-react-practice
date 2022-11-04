require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { google } = require('googleapis')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter your email!'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter your password!'],
    },
    picture: {
      type: String,
    },
    token: {
      type: String,
    },
    meta: {},
  },
  {
    timestamps: true,
  }
)
let UserModel = mongoose.model('Users', userSchema)

// Database connection
mongoose.connect(
  process.env.MONGODB_URL || '',
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err
    console.log('Connected to mongodb')
  }
)

app.use((req, res, next) => {
  const bearerHeader = req.header('Authorization')
  if (bearerHeader) {
    const bearerToken = bearerHeader.split(' ').pop()
    req.token = bearerToken
    next()
  } else {
    // Forbidden
    res.sendStatus(403)
  }
})

// middleware
const authMiddleware = (req, res, next) => {
  try {
    // const token = req.header('Authorization')
    const token = req.token
    if (!token) return res.status(200).json({ msg: 'Invalid Authentication.' })
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(200).json({ msg: 'Invalid Authentication. JWT.verify failed' })
      req.user = user
      next()
    })
  } catch (err) {
    console.log('index.js::[23] err', err)
    return res.status(500).json({
      err: 'internal server error',
    })
  }
}

// routes
app.get('/', (req, res) => {
  res.send({ response: 'Auth  local-server' }).status(200)
})

// routes
app.post('/google_login', async (req, res) => {
  const { OAuth2 } = google.auth
  const client = new OAuth2(process.env.GOOGLE_MAILING_SERVICE_CLIENT_ID)

  const { tokenId } = req.body
  const verify = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_MAILING_SERVICE_CLIENT_ID,
  })

  const { email_verified, email, picture } = verify.payload
  // const password = email + process.env.APP_SECRET

  const passwordHash = await bcrypt.hash('googleLogin', 12)
  if (!email_verified) return res.status(400).json({ msg: 'Email verification failed.' })

  let user = await UserModel.findOne({ email })

  if (!user) {
    user = new UserModel({
      email,
      picture,
      password: passwordHash,
      meta: req.body,
    })
    await user.save()
  }

  const refresh_token = createRefreshToken({ id: user._id })

  res.cookie('refreshtoken', refresh_token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  })

  return res.json({
    msg: 'Login success!',
    user: user,
    token: refresh_token,
    oAuthMeta: verify,
  })
})

app.get('/user', authMiddleware, async (req, res) => {
  const user = await UserModel.findById(req.user.id).select('-password')
  return res.json({
    user: user,
    ...(res.user || {}),
  })
})


app.get('/logout', authMiddleware, async (req, res) => {
  try {
    res.clearCookie('refreshtoken')
    return res.json({ msg: 'Logged out.' })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
})

app.delete('/user', async (req, res) => {
  const { email } = req.body
  const user = await UserModel.findOne({ email })
  if (user) {
    await user.deleteOne()
    res.json({
      msg: 'user deleted',
    })
  }
  res.json({
    msg: 'User not found',
  })
})

// start server
const PORT = process.env.PORT || 4001
app.listen(PORT, () => {
  console.log('Auth Server is running on port', PORT)
})

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
}

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}
