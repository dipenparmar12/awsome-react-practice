import axios from 'axios'
import React from 'react'
import useAuth from '../hooks/UseAuth'
import redirect from '../utils/redirect'
import { isDevEnv } from '../utils/environment'

export default function Login() {
  const { authToken, setToken, authLoading } = useAuth()

  React.useEffect(() => {
    console.log('Login.js::[10] authToken', authToken)
    if (authToken) {
      redirect('/admin')
    }
  }, [authToken, authLoading])

  const onSubmit = (e) => {
    e.preventDefault()
    const email = e.target['email'].value
    const password = e.target['password'].value
    console.log('Login.js::[9] email, password', email, password)

    // const url = process.env.REACT_APP_API_URL + '/api/auth/signin'
    const url = 'http://localhost:8001/api/auth/signin'

    axios
      .post(url, { username: email, password })
      .then((r) => {
        console.log('Login.js::[11] r', r.data)
        setToken(r?.data?.accessToken)
        redirect('/admin')
      })
      .catch((e) => console.log('Login.js::[15] e', e?.message))
  }

  const renderLoginForm = (
    <form className='login_form' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='email'
        name='email'
        defaultValue={isDevEnv() ? 'dipenparmar12' : null}
      />
      <input
        type='password'
        placeholder='password'
        name='password'
        defaultValue={isDevEnv() ? 'Admin@123' : null}
      />
      <br />
      <button>Submit</button>
    </form>
  )

  return renderLoginForm
}

// fetch('http://localhost:2020/')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));
