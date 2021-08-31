import "./header.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo of Westville Associates" />
        </div>
        <ContactDetailsComponent />
        <div className="navigation">
          <Link to="/">
            <i class="fas fa-bars"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export const ContactDetailsComponent = () => {
  return (
    <nav>
      <a href="tel:+4402083985704">
        <i class="fas fa-phone-alt"></i>
        <span>+44 (0) 20 8398 5704</span>
      </a>
      <a href="mailto:info@westvilleassociates.com">
        <i class="fas fa-at"></i>
        <span>info@westvilleassociates.com</span>
      </a>
    </nav>
  );
};

export default HeaderComponent;
