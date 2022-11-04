import axios from 'axios'
import Cookies from 'js-cookie'
// import config from '../config/config' //
const config = { apiUrl: 'http://localhost:8000/api' } // Should be stored in json file

export const StatusCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  PAGE_EXPIRED: 419,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
}

const baseURL = `${config.apiUrl}/api`
const axiosApp = axios.create({
  baseURL,
  withCredentials: true, // required to handle the CSRF token
})

//  // Request interceptor
axiosApp.interceptors.request.use((axiosConfig) => {
  if (Cookies.get('token')) {
    // eslint-disable-next-line no-param-reassign
    axiosConfig.headers.Authorization = `Bearer ${Cookies.get('token')}`
  }
  return axiosConfig
})

// // Response interceptor
axiosApp.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500

  if (!expectedError) {
    /// TODO::: Logger Service
    console.log('AxiosService.js::[29] error.response', error.response)
  }

  if (
    error.response &&
    [StatusCode.UNAUTHORIZED, StatusCode.PAGE_EXPIRED].includes(
      error.response.status,
    )
  ) {
    if (Cookies.get('token')) {
      Cookies.remove('token')
    }
  }

  return Promise.reject(error)
})

export default axiosApp
