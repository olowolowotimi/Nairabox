import React, { useState } from "react";
import menuStyle from "./styles/Menu.module.css";
import { IoMdMenu } from "react-icons/io";



const Menu = () => {
  const [active, setActive] = useState(false);

  const toggleMobileMenu = () => {
    setActive(!active);
    console.log(active);
  };

  const mobileMenu = (
    <div className={`${active ? menuStyle.mobileMenu : menuStyle.inactiveMenu}`}>
            <div className={menuStyle.display}>
            <ul>
                <li>Featured Services</li>
                <li>Our Partners</li>
                <li>Contact Us</li>
            </ul>
            <div className={menuStyle.images}>
            <img src='./static/img/google.png' alt="google logo" />
            <img src='./static/img/apple.png' alt="apple logo" />
            </div>
            </div>
        </div>

  );
return (
    <div
      className={menuStyle.icon}
      onClick={() => {
        toggleMobileMenu();
      }}
    >
      <IoMdMenu className={menuStyle.option} />
      {mobileMenu}
    </div>
  );
};

export default Menu;