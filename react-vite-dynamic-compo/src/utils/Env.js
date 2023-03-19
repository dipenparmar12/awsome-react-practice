/**
 * check environment
 * @param {string} env
 * @returns boolean
 */
export const environmentIs = (env = 'development') => {
  return import.meta.env.MODE === env
}

/**
 * Determine is dev environment
 * @returns bool
 */
export const isDevEnv = import.meta.env.MODE === 'development'

/**
 * Determine is Production environment
 * @returns bool
 */
export const isProdEnv = import.meta.env.MODE === 'production'

const Env = {
  IsDev: isDevEnv,
  IsProd: isProdEnv,
}

export default Env
