import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/linkedIn Fred-modified.png'
const Hero = () => {
  return (
    <div className='hero'>
        
    <img src={profile_img} alt="" />
    <h1>Hi, I'm Shumbusho Fred, Full Stack Developer in the usa</h1>
    <p>Building websites and web applications that are fast, responsive and accessible. dumiwe koko</p>
    <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
    </div>
    </div>
  )
}

export default Hero