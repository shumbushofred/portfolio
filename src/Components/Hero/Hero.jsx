import React from 'react';
import './Hero.css';
import profile_img from '../../assets/linkedIn Fred-modified.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <h1>
            <span className='hello-intro'>Hello, I am</span>
            <span className='name-text'>Fred Shumbusho</span>
          </h1>
          <p className='description-text'>a passionate backend developer with a solid computer science foundation, dedicated to crafting secure and scalable APIs and cloud solutions</p>
        </div>
        <img src={profile_img} alt="" />
      </div>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;