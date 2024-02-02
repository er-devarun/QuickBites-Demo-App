import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";

function Footer(){
    return(
        <footer>
            
            <div className="footer-container">
                
                <div className="news-letter-container">
                    <div className="new-letter-txt">
                        <RiMailSendLine className="news-letter-icon"/>
                        <p>Subscribe Our Newsletter</p>
                    </div>
                    
                    <div className="user-input">
                        <input type="text" placeholder="Your Email"/>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>

                    <div className="footer-column footer-logo-container">
                        <img className="footer-logo" src="/logo.svg" alt="logo" />
                        <p className="logo-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In aliquid debitis harum quae nobis doloremque?</p>
                        <div className="social-media">
                            <a href="#"><FaFacebook className="social-icon"/></a>
                            <a href="#"><FaInstagram className="social-icon"/></a>
                            <a href="#"><FaWhatsapp className="social-icon"/></a>
                            <a href="#"><FaTwitter className="social-icon"/></a>
                            <a href="#"><FaYoutube className="social-icon"/></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <p className="links-heading">Information</p>
                        <a href="#">Shipping</a>
                        <a href="#">FAQs</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Delivery Information</a>
                        <a href="#">Order History</a>
                    </div>

                    <div className="footer-column">
                        <p className="links-heading">Quick Links</p>
                        <a href="#">Terms and Conditions</a>
                        <a href="#">Support</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                        <a href="#">Downloads</a>    
                    </div>
                    <div className="footer-column contact-info-container">
                        <p className="links-heading">Contact Us</p>
                        <div className="contact-container">
                            <div><MdLocationOn className="footer-icon"/><span>36/2, 36/3, Electronic City, Bangalore - 560067</span></div>
                            <div><MdEmail className="footer-icon"/><span>mail@quickbites.com</span></div>
                            <div><HiPhone className="footer-icon"/><span>1800 22 7722</span></div>
                        </div>
                        <div className="app-link">
                            <a href="#"><img className="play-store-img" src="/google-play-store.png" alt="Play Store Image" /></a>
                            <a href="#"><img className="app-store-img" src="/app-store.png" alt="App Store Image" /></a>
                        </div>
                    </div>
            </div>
            <div className="copyright">
                © 2024 www.quickbites.com | All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;