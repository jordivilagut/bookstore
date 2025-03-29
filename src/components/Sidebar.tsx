import { FaTwitter, FaGithub } from 'react-icons/fa6';
import { SiKofi } from 'react-icons/si';
import profileImage from '../assets/jordi-profile-cartoon.png';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <div className="profile-image-container">
          <img src={profileImage} alt="Jordi Vilagut" className="profile-image" />
        </div>
        <h2 className="profile-name">Jordi Vilagut</h2>
        <p className="profile-tagline">Software Engineer | AI Mentor</p>
      </div>
      
      <div className="social-icons">
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://ko-fi.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <SiKofi />
        </a>
      </div>
    </div>
  );
};

export default Sidebar; 