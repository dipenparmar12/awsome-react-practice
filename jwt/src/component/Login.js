import React from 'react'

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault()
    const email = e.target['email'].value
    const password = e.target['password'].value
    console.log('Login.js::[9] email, password', email, password)
  }

  return (
    <form className='login_form' onSubmit={onSubmit}>
      <input type='text' placeholder='email' name='email' />
      <input type='password' placeholder='password' name='password' />
      <br />
      <button>Submit</button>
    </form>
  )
}
