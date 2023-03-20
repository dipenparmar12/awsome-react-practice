import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8000/api'
let baseURL = process.env.API_BASE_URL + process.env.API_VERSION
const axiosApp = axios.create({ baseURL: baseURL })

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

// Add a request interceptor
axiosApp.interceptors.request.use(function (config) {
  //  AUTH TOKEN LOGIC
  // if (Cookie.get('token')) {
  //   config.headers.Authorization = `Token ${Cookie.get('token')}`
  // }
  return config
})

export const auth = {
  get: async (obj) => await axiosApp.get(`/auth?${objToQueryString(obj)}`),
  register: async (d) => await axiosApp.post(`/auth?`, d),
  login: async (d) => await axiosApp.post(`/auth`, d),
  logout: async () => await axiosApp.get(`/auth`),
}

export const users = {
  entry: async (id) => await axiosApp.get(`/users/${id}`),
  create: async (d) => await axiosApp.post(`/users`, d),
  update: async (id, d) => await axiosApp.patch(`/users/${id}`, d),
  delete: async (id) => await axiosApp.delete(`/users/${id}`),

  comments: {
    get: async (id) => await axiosApp.get(`/users/${id}/comments`),
    create: async (id, d) => await axiosApp.post(`/users/${id}/comments`, d),
    update: async (id, d) => await axiosApp.patch(`/users/${id}/comments`, d),
    delete: async (id) => await axiosApp.delete(`/users/${id}/comments`),
  },
}

export const projects = {
  entry: async (id) => await axiosApp.get(`/projects/${id}`),
  get: async (obj, c) =>
    await axiosApp.get(`/projects${objToQueryString(obj)}`, c),
  create: async (d) => await axiosApp.post(`/projects`, d),
  update: async (id, d) => await axiosApp.patch(`/projects/${id}`, d),
  delete: async (id) => await axiosApp.delete(`/projects/${id}`),

  issues: {
    get: async (id) => await axiosApp.get(`/projects/${id}/issues`),
    create: async (id, d) => await axiosApp.post(`/projects/${id}/issues`, d),
    update: async (id, d) => await axiosApp.patch(`/projects/${id}/issues`, d),
    delete: async (id) => await axiosApp.delete(`/projects/${id}/issues`),
  },
}

export const issues = {
  entry: async (id) => await axiosApp.get(`/issues/${id}`),
  get: async (config) => await axiosApp.get(`/issues`, config),
  create: async (d) => await axiosApp.post(`/issues`, d),
  update: async (id, d) => await axiosApp.patch(`/issues/${id}`, d),
  delete: async (id) => await axiosApp.delete(`/issues/${id}`),
}

export const externalApi = {
  joke: async () => await axios.create().get('https://v2.jokeapi.dev/joke/Any'),
  wether: async () => await axios.create().get('https://wether.com/current'),
}

export const StatusMsg = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
}

export const StatusCode = {
  SUCCESS: 200,
  FAIL: 400,
  ERROR: 500,
  UNAUTHORIZED: 401,
}

// default export
const HttpApi = {
  auth,
  users,
  projects,
  issues,
  externalApi,
  utils: {
    // ...utils,
    StatusMsg,
    StatusCode,
    objectToQueryString: objToQueryString,
  },
}

export default HttpApi

/**
 * Query String builder from object or nested objects.
 * @param {Object} initialObj
 * @return {String}
 * @src https://stackoverflow.com/a/66330140
 */
export function objToQueryString(initialObj = {}) {
  if (!initialObj) return ''
  const reducer = (obj, parentPrefix = null) => (prev, key) => {
    const val = obj[key]
    key = encodeURIComponent(key)
    const prefix = parentPrefix ? `${parentPrefix}[${key}]` : key

    if (val === null || typeof val === 'function') {
      prev.push(`${prefix}=`)
      return prev
    }

    /// handle str,num, bool
    if (['string', 'number', 'boolean'].includes(typeof val)) {
      prev.push(`${prefix}=${encodeURIComponent(val)}`)
      return prev
    }

    /// handle Date Type (send TimeStamp
    if (typeof val === 'object' && val instanceof Date) {
      const onlyDate = val.toISOString().split('T')[0] // 2021-02-26

      // const onlyTime = val.toTimeString().split(' ')[0].replace(/:/g, ':')
      prev.push(`${prefix}=${encodeURIComponent(onlyDate)}`)
      return prev
    }

    prev.push(Object.keys(val).reduce(reducer(val, prefix), []).join('&'))
    return prev
  }

  return Object.keys(initialObj).reduce(reducer(initialObj), []).join('&')
}

/* 
========================================================
  example
========================================================   
/// API Call
 httpApi.users.get({ limit: 5, order_by: '-createdAt' })
  .then((res) => res?.data?.data || res?.data || res)
  .then((res) => { return res })
  .catch((error) => console.log(error))  
/// Multiple API Call
Promise.all([
  httpApi.users.get({ is_admin: false, limit: 5 }),
  httpApi.projects.get({ status: 'ACTIVE', limit: 10 }),
])
  .then((data) => data?.map((res) => res?.data?.data || res?.data || res))
  .then(([resUsers, resProjects]) => {})
  .catch((error) => console.log(error))  
*/

/* 
========================================================
  Fetch HOOK
======================================================== 
*/
// React.useEffect(
//   (_) => {
//     const qry = { ...filters }
//     const cancelSource = axios.CancelToken.source()
//     const config = { cancelToken: cancelSource.token }
//     setLoading(true)
//     httpApi.users.get(qry, config)
//       .then((res) => res?.data?.data || res?.data || res)
//       .then((res) => setData(res))
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false))
//     return () => {
//       cancelSource?.cancel()
//       setLoading(false)
//     }
//   },
//   [apiCall, qry, filters],
// )

/* 
========================================================
  SET BASE URL DIRECTLY USING QUERY PARAMETER
======================================================== 
 domain.com/?baseURL=http://API_BASE_URL_CUSOMIZED
try {
  if (typeof window !== 'undefined') {
    const url = new URLSearchParams(window.location.search).get('baseURL')
    baseURL = url ? window.localStorage.setItem('baseURL', url) : baseURL
  }
  if (typeof window !== 'undefined' && window.localStorage.getItem('baseURL')) {
    baseURL = window.localStorage.getItem('baseURL') || baseURL
  }
} catch (error) {
  console.log('ApiService.js::[17] error', error)
}
*/

/* 
========================================================
  DUMP
======================================================== 
// export const utils = {
//   // getErrorMessage: (error, fallbackErrMsg = 'Something went wrong!') => {
//   //   console.log('ApiService.js::[135] error', {
//   //     errorMessage: error?.message,
//   //     line: error?.line,
//   //     lineNumber: error?.lineNumber,
//   //     error: error,
//   //   })
//   //   let errorMessage = (error && error?.message) || fallbackErrMsg
//   //   if (error?.response?.headers?.['content-type'] === 'application/json') {
//   //     const { statusMessage } = error?.response?.data?.errors?.[0] || {}
//   //     errorMessage = statusMessage || fallbackErrMsg
//   //   }
//   //   return errorMessage
//   // },
//   // catchError: (error) => {
//   //   console.log('ApiService.js::[65] ', Object.assign({}, error))
//   //   const description = httpApi.utils.getErrorMessage(error?.response)
//   //   Notify({ message: description, type: 'error' })
//   // },
// }
*/

/*
 axios.all([
    axios.get(`https://api.foursquare.com/v2/venues/trending?ll=40.7222756,-74.0022724&limit=50&oauth_token=${token.accessToken}&v=20140806`),
    axios.get(`https://api.foursquare.com/v2/venues/49da74aef964a5208b5e1fe3?oauth_token=${token.accessToken}&v=20190113`),
    axios.get(`https://api.foursquare.com/v2/users/self/checkins?oauth_token=${token.accessToken}&v=20190113`)
  ])       
*/
