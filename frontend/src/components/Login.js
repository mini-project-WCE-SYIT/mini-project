import React, { useState } from 'react'
import login from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const URL = 'https://wce-transcript-backend.onrender.com/api/v1/user/login'
  const [error, setError] = useState('')
  const data = { username, password }
  const navigate = useNavigate()

  const fetchData = async (URL) => {
    try {
      await axios({
        method: 'POST',
        url: URL,
        data,
      }).then((res) => {
        console.log(res.data)
        setError(res.data.msg)
        navigate('/home')
      })
    } catch (err) {
      console.log(err)
      setError('Incorrect username or password')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password)
    fetchData(URL)
  }

  return (
    <>
      <Webheader />
      <div className={login.loginform}>
        <h2>Welcome to Transcript Portal</h2>
        <form onSubmit={handleSubmit} className={login.form}>
          <h2 style={{ textAlign: 'center', marginBlockStart: '0rem' }}>
            Sign in
          </h2>
          {error && <p className='error'>{error}</p>}
          <div className={login.innerDiv}>
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
          <div className={login.innerDiv}>
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
          <button type='submit' className={login.submitbtn}>
            Login
          </button>
          <a
            href=''
            onClick={() => {
              navigate('/home')
            }}
            className={login.continueasguest}
          >
            Continue as guest
          </a>
        </form>
      </div>
    </>
  )
}

const Webheader = () => {
  return (
    <div className={login.head}>
      <img src={'/wcelogo.png'} alt='mypic' className={login.logo} />
      <h1>Walchand College of Engineering, Sangli</h1>
    </div>
  )
}

export default Login
