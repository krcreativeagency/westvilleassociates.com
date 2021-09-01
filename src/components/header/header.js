import "./header.scss";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import NavComponent from "../nav/nav";
import { useState } from "react";

const HeaderComponent = () => {
  const [Navigation, setNavigation] = useState(false);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="Logo of Westville Associates" />
          </div>
          <ContactDetailsComponent />
          <div className="navigation">
            <Link
              to="#"
              onClick={() => {
                setNavigation(true);
              }}
            >
              <i className="fas fa-bars" />
            </Link>
          </div>
        </div>
      </header>
      <NavComponent action={Navigation} setAction={setNavigation} />
    </>
  );
};

export const ContactDetailsComponent = () => {
  return (
    <nav>
      <a href="tel:+4402083985704">
        <i className="fas fa-phone-alt"></i>
        <span>+44 (0) 20 8398 5704</span>
      </a>
      <a href="mailto:info@westvilleassociates.com">
        <i className="fas fa-at"></i>
        <span>info@westvilleassociates.com</span>
      </a>
    </nav>
  );
};

export default HeaderComponent;
