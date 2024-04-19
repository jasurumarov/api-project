import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-navbar">
                <div className="footer-navbar__title">
                    <img className='footer-navbar__title--img' src="./images/site-logo.png" alt="site logo" />
                    <p>FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
                    <ul>
                        <li>
                            <img src="./images/geo.svg" alt="location icon" />
                            51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                        </li>
                        <li>
                            <img src="./images/mail.svg" alt="location icon" />
                            example@email.com
                        </li>
                        <li>
                            <img src="./images/call-red.svg" alt="location icon" />
                            +91 123 4567890
                        </li>
                    </ul>
                </div>
                <ul className='footer-navbar__list'>
                    <h3>Company</h3>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Delivery Information</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#">contact Us</a>
                    </li>
                    <li>
                        <a href="#">Support Center</a>
                    </li>
                </ul>
                <ul className='footer-navbar__list'>
                    <h3>Category</h3>
                    <li>
                        <a href="#">Dairy & 12 Pro</a>
                    </li>
                    <li>
                        <a href="#">Tab & MacBook</a>
                    </li>
                    <li>
                        <a href="#">S24+ & A55</a>
                    </li>
                    <li>
                        <a href="#">Ram & Battery</a>
                    </li>
                    <li>
                        <a href="#">Xiomi & Apple</a>
                    </li>
                    <li>
                        <a href="#">6000 MAh</a>
                    </li>
                </ul>
                <div className="footer-navbar__form">
                    <h3>Subscribe Our Newsletter</h3>
                    <label>
                        <input type="search" placeholder='Search here...'/>
                        <img src="./images/type.svg" alt="type icon" />
                    </label>
                    <div className='footer-navbar__form--social'>
                        <a href="https://www.facebook.com/">
                            <img src="./images/social1.svg" alt="social media" />
                        </a>
                        <a href="https://www.twitter.com/">
                            <img src="./images/social2.svg" alt="social media" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img src="./images/social3.svg" alt="social media" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src="./images/social4.svg" alt="social media" />
                        </a>
                    </div>
                    <div className="footer-navbar__form--imgs">
                        <img src="./images/benefit1.webp" alt="img" />
                        <img src="./images/benefit2.webp" alt="img" />
                        <img src="./images/benefit3.webp" alt="img" />
                        <img src="./images/benefit1.webp" alt="img" />
                        <img src="./images/benefit2.webp" alt="img" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 <span>FoodTrove</span>, All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer