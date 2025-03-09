import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import email_icon from '../../assets/mail_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Shumbusho Fred</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p>© 2021 Shumbusho Fred. All rights reserved.</p>
            </div>
            <div className="footer-bottom-right">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer