import { FaUser } from 'react-icons/fa';
import footerLogo from '../../assets/my-pic/footerlogo.webp';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footerLogo} alt="Footer Logo" />
          <p>
            I am a skilled frontend developer with a passion for creating modern and user-friendly websites and web applications. My expertise lies in HTML, CSS, JavaScript, and React.js, with a focus on crafting engaging and intuitive user experiences.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaUser size={24} color="#a0a0a0" />
            <input type="text" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2024 Your Company Name. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
