import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  return (
    <header>
      <nav className="desktop-nav">
        <div className="desktop-nav-container">
          <div>
            <a href="/#" className="logo">
              rDiary
            </a>
          </div>
          <div className="main-links">
            <a href="/#">Home</a>
            <a href="/#">About Us</a>
            <a href="/#">My Diary</a>
          </div>
          <div className="login-register-div">
            <button className="login-button">Login</button>
            <button className="register-button">Register</button>
          </div>
        </div>
      </nav>

      <nav className="mobile-nav">
        <div className="mobile-nav-container">
          <div className="logo-hamburger-links">
            <a href="/#" className="logo">
              rDiary
            </a>
            <FaBars />
          </div>
          <div className="main-links">
            <a href="/#">Home</a>
            <a href="/#">About Us</a>
            <a href="/#">My Diary</a>
            <hr />
            <a href="">Login</a>
            <a href="">Sign Up</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
