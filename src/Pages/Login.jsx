import React from 'react'

import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const handleNavigation = () =>{
        navigate('/signup')
    }

  return (
    <div className="container">
      <div className="box">
        {/* title */}
        <h2 className="mainTitle">LOGIN</h2>
        {/* input section */}
        <div className="inputBox">
          <input type="text" placeholder='Enter your userid' className="input" />
          <input type="password"  placeholder='enter your password' className="input" />
          <button className="btn">LOGIN</button>
        </div>
        {/* goto signup text */}
        <p className="navSignup" onClick={handleNavigation} >Go to signup</p>
      </div>
    </div>
  )
}

export default Login