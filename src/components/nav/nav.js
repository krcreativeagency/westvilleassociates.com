import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./nav.scss";

const NavComponent = ({ action, setAction }) => {
  const [Navigation] = useState([
    { name: "Home", slug: "/" },
    { name: "Party Wall Matters", slug: "/service/party-wall-matters" },
    { name: "Building Surveys", slug: "/service/building-surveys" },
    { name: "Defects Analysis", slug: "/service/defects-analysis" },
    { name: "Procurement and Tendering", slug: "/service/procurement-and-tendering" },
    { name: "Contract Administration", slug: "/service/contract-administration" },
    { name: "Planned Maintenance Programmes", slug: "/service/planned-maintenance-programmes" },
    { name: "Contact", slug: "#Contact" },
  ]);

  return (
    <div className={`nav-wrapper ${action ? "open" : ""}`}>
      <nav>
        {Navigation.map((item, index) => (
          <NavLink
            key={index}
            to={item.slug}
            exact
            onClick={() => {
              setAction(false);
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default NavComponent;
