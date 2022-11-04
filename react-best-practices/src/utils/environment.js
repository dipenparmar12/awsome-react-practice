/**
 * check environment
 * @param {string} env
 * @returns boolean
 */
export const environment = (env = 'development') => {
  return process.env.NODE_ENV === env
}

/**
 * Determine is dev environment
 * @returns bool
 */
export const isDevEnv = process.env.NODE_ENV === 'development'

/**
 * Determine is Production environment
 * @returns bool
 */
export const isProdEnv = process.env.NODE_ENV === 'production'

const ENV = {
  IsDev: isProdEnv,
  IsProd: isProdEnv,
}

export default ENV
