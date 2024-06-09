import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <p className="footer-logo">rDiary</p>

        <div className="footer-links">
          <div>
            <h3>Navigation</h3>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">Register</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Socials</h3>
            <ul>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Reddit</a>
              </li>
              <li>
                <a href="">X</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>FAQs</h3>
            <ul>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
