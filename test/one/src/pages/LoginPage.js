import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

/**
 * @src https://tailwindcomponents.com/component/simple-sign-in
 * @returns 
 */
export default function LoginPage() {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuth()
  let from = location.state?.from?.pathname || '/'

  function handleSubmit(event) {
    event.preventDefault()
    let formData = new FormData(event.currentTarget)
    let userEmail = formData.get('email')
    auth.signIn(userEmail, () => {
      navigate(from, { replace: true })
    })
  }

  React.useEffect(() => {
    if (auth?.user) navigate(from, { replace: true })
    return () => {}
  }, [auth.user, from, navigate])

  return (
    <>
      <div className='flex items-center min-h-screen bg-white dark:bg-gray-900'>
        <div className='container mx-auto'>
          <div className='max-w-md mx-auto my-10'>
            <div className='text-center'>
              <h1 className='my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200'>
                Sign in
              </h1>
              <p className='text-gray-500 dark:text-gray-400'>
                Sign in to access your account
              </p>
              {from && from !== '/' && (
                <p className='text-gray-500 dark:text-gray-400'>
                  You must log in to view the page at {from}
                </p>
              )}
            </div>
            <div className='m-7'>
              <form onSubmit={handleSubmit}>
                <div className='mb-6'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm text-gray-600 dark:text-gray-400'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='off'
                    placeholder='your@company.com'
                    defaultValue='your@company.com'
                    className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
                  />
                </div>
                <div className='mb-6'>
                  <div className='flex justify-between mb-2'>
                    <label
                      htmlFor='password'
                      className='text-sm text-gray-600 dark:text-gray-400'
                    >
                      Password
                    </label>
                    <a
                      href='#!'
                      className='text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300'
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Your Password'
                    className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
                  />
                </div>
                <div className='mb-6'>
                  <button
                    type='submit'
                    className='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
                  >
                    Sign in
                  </button>
                </div>
                {/* <p className='text-sm text-center text-gray-400'>
                      Don't have an account yet?{' '}
                      <a
                        href='#!'
                        className='text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800'
                      >
                        Sign up
                      </a>
                      .
                    </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
