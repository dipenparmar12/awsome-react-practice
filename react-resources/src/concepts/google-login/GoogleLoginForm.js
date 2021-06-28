import React from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { connect, useDispatch} from 'react-redux'
import { googleLoginSuccess, googleLogoutSuccess } from './GoogleLogin'


function GoogleLoginForm({ isAuthenticated }) {
  const dispatch = useDispatch()

  React.useEffect(() => {}, [])

  const onSuccess = async (response) => {
    console.log('GoogleLoginForm.js::[7]onSuccess')
    const res = {
      tokenId: response.tokenId,
      userInfo: response?.Ys,
      profileObj: response?.profileObj,
      response,
    }

    dispatch(googleLoginSuccess(JSON.parse(JSON.stringify(res))))
  }
  const onFailure = (response) => {
    console.log('GoogleLoginForm.js::[7]onFailure', response)
  }
  
  const logout = (response) => {
    dispatch(googleLogoutSuccess())
    window.location = '/'
  }

  return (
    <div>
      {isAuthenticated ? (
        <GoogleLogout
          clientId='302076842696-gc8qb3a4f36aq6kg1g44172qu44k3ubs.apps.googleusercontent.com'
          buttonText='Logout'
          onLogoutSuccess={logout}
          onFailure={(res)   =>   {
            console.log(res)
          }}
        />
      ) : (
        <GoogleLogin
          clientId='302076842696-gc8qb3a4f36aq6kg1g44172qu44k3ubs.apps.googleusercontent.com'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          buttonText='Login with Google'
          isSignedIn={true}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authState.isAuthenticated,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLoginForm)