import ReactDom from 'react-dom'
import './index.css'
import React, { useState, useEffect } from 'react'
// import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('Invalid username or password. Please try again.')
  }
  return (
    <>
      <Webheader />
      <div className='login-form'>
        <h2>Welcome to Transcript Portal</h2>
        <form onSubmit={handleSubmit} className='form'>
          <h2 style={{ textAlign: 'center', marginBlockStart: '0rem' }}>
            Sign in
          </h2>
          {error && <p className='error'>{error}</p>}
          <div className='innerDiv'>
            <label htmlFor='username'>Username*</label>
            <input
              type='text'
              id='username'
              placeholder=' Enter your username'
              value={username}
              name='username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='innerDiv'>
            <label htmlFor='password'>Password*</label>
            <input
              type='password'
              id='password'
              value={password}
              name='password'
              placeholder=' Enter your password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='submitbtn'>
            Login
          </button>
          <a href='' className='forgotpassword'>
            Forgot Password?
          </a>
        </form>
      </div>
    </>
  )
}

const Webheader = () => {
  return (
    <div className='head'>
      <img
        src={process.env.PUBLIC_URL + '/wcelogo.png'}
        alt='mypic'
        className='logo'
      />
      <h1>Walchand College of Engineering, Sangli</h1>
    </div>
  )
}

export default Login
