import { FaHome, FaShoppingCart, FaStar, FaTags, FaSearch } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <h2 className="profile-name">Amazon Deals</h2>
        <p className="profile-tagline">Best Products & Deals</p>
      </div>
      
      <nav className="navigation-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <FaHome className="nav-icon" />
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/featured" className="nav-link">
              <FaStar className="nav-icon" />
              Featured Products
            </a>
          </li>
          <li className="nav-item">
            <a href="/categories" className="nav-link">
              <FaShoppingCart className="nav-icon" />
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a href="/deals" className="nav-link">
              <FaTags className="nav-icon" />
              Best Deals
            </a>
          </li>
          <li className="nav-item">
            <a href="/search" className="nav-link">
              <FaSearch className="nav-icon" />
              Search Products
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 