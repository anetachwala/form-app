import { useState } from "react";
import "../styles/Navbar.css";
import NavbarItem from "./NavbarItem";
import logo from "../assets/dots.png";
import { navbarItems } from "../helpers/helpers";

function Navbar() {
  const [active, setActive] = useState(0);

  return (
    <div className="Navbar">
      <img className="Navbar__logo" src={logo} alt="" />
      <div className="Navbar__items">
        {navbarItems.map((item, index) => {
          return (
            <NavbarItem
              onClick={() => setActive(index)}
              key={index}
              icon={item.icon}
              title={item.title}
              amount={item.amount}
              active={active}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
