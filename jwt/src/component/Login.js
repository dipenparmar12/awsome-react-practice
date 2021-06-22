import React from 'react'
import { isDevEnv } from '../utils/environment'

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault()
    const email = e.target['email'].value
    const password = e.target['password'].value
    console.log('Login.js::[9] email, password', email, password)
  }

  return (
    <form className='login_form' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='email'
        name='email'
        defaultValue={isDevEnv() ? process.env.REACT_APP_MY_EMAIL : null}
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
}
