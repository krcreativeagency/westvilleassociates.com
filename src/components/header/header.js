import "./header.scss";
import logo from "../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import NavComponent from "../nav/nav";
import { useState } from "react";

const HeaderComponent = ({ Email, Phone }) => {
  const [Navigation, setNavigation] = useState(false);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="Logo of Westville Associates" />
            </NavLink>
          </div>
          <ContactDetailsComponent Email={Email} Phone={Phone} />
          <div className="navigation">
            <Link
              to="#"
              onClick={() => {
                setNavigation(Navigation ? false : true);
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

export const ContactDetailsComponent = ({ Email, Phone }) => {
  return Email ? (
    <nav>
      <a href={`tel:+44${Phone}`}>
        <i className="fas fa-phone-alt"></i>
        <span>{Phone}</span>
      </a>
      <a href={`mailto:${Email}`}>
        <i className="fas fa-at"></i>
        <span>{Email}</span>
      </a>
    </nav>
  ) : null;
};

export default HeaderComponent;
