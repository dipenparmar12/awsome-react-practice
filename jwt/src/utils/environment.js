/**
 * check environment
 * @param {string} env
 * @returns bool
 */
const environment = (env = 'development') => {
  return process.env.NODE_ENV === env
}

/**
 * Determine is dev environment
 * @returns bool
 */
export const isDevEnv = () => {
  return environment('development')
}

export default environment
