import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

  const navigate = useNavigate()

  const handleNavigation = () =>{
      navigate('/')
  }

  return (
    <div className="container">
      <div className="box">
        {/* title */}
        <h2 className="mainTitle">Signup</h2>
        {/* input section */}
        <div className="inputBox">
          <input type="text" placeholder='Enter your userid' className="input" />
          <input type="password"  placeholder='enter your password' className="input" />
          <button className="btn">Signup</button>
        </div>
        {/* goto signup text */}
        <p className="navSignup" onClick={handleNavigation}>Go to Login</p>
      </div>
    </div>
  )
}

export default Signup