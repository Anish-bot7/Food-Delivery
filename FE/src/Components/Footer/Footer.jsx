import React from 'react'
import { assets } from '../../assets/assets'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis nemo aut maxime est! Recusandae, quod ducimus sit magni porro consequuntur nobis sed obcaecati natus voluptates maiores, qui eveniet. Rerum, obcaecati.</p>
              <div className="footer-social-links">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
              </div>
            
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivey</li>
                    <li>Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+6565-5656-65</li>
                        <li>tomato@gmail</li>
                    </ul>
            </div>
        </div>
        <hr></hr>
        <p className="footer-copyright">CopyRight issued to Anish 2025</p>

    </div>
  )
}

export default Footer