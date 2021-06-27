import React from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { googleLoginSuccess } from './GoogleLogin'

export default function GoogleLoginForm() {
  const isAuthenticated = useSelector((state) => state.authState.isAuthenticated)
  const dispatch = useDispatch()

  // React.useEffect(() => {
  //   const firstLogin = localStorage.getItem('firstLogin')
  //   if (firstLogin) {
  //     const getToken = async () => {
  //       const res = await axios.post('/user/refresh_token', null)
  //       dispatch({ type: 'GET_TOKEN', payload: res.data.access_token })
  //     }
  //     getToken()
  //   }
  // }, [auth.isLogged, dispatch])

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
    console.log('GoogleLoginForm.js::[12] logout', response)
  }

  return (
    <div>
      {isAuthenticated ? (
        <GoogleLogout
          clientId='302076842696-gc8qb3a4f36aq6kg1g44172qu44k3ubs.apps.googleusercontent.com'
          buttonText='Logout'
          onLogoutSuccess={logout}
        />
      ) : (
        <GoogleLogin
          clientId='302076842696-gc8qb3a4f36aq6kg1g44172qu44k3ubs.apps.googleusercontent.com'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          buttonText='Login with Google'
        />
      )}
    </div>
  )
}
