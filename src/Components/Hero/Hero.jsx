import React from 'react'
import './Hero.css'
import profile_img from '../../assets/linkedIn Fred-modified.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        
    <img src={profile_img} alt="" />
    <h1><span>I'm Shumbusho Fred,</span>Full Stack Developer in the usa</h1>
    <p>Building websites and web applications that are fast, responsive and accessible. dumiwe koko</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
    </div>
    </div>
  )
}

export default Hero