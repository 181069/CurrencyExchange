import React from "react";
import DropDown from "./DropDown.component";

import styles from "./NavBar.module.css";

const NavBar = (props) => {
  /**
   *
   * @param { string } title
   * @param { string } desc
   * @param { string } icon
   * @returns
   */
  const createMenuItem = (title, desc, icon) => {
    return { title: title, desc: desc, icon: icon };
  };

  const sendMoneyMenuItems = [
    createMenuItem(
      "Send Money",
      "Get a quote for fast and secure money transfers",
      ""
    ),
    createMenuItem("Sign Up", "", ""),
    createMenuItem("Compare rates", "", ""),
  ];

  return (
    <div className={styles.NavBar}>
      <div className="home">XE</div>
      <div className={styles.ribbon}>
        <DropDown title="Converter" items={sendMoneyMenuItems} />
        <DropDown title="Send money" items={sendMoneyMenuItems} />
        <DropDown title="Business and API" items={sendMoneyMenuItems} />
        <DropDown title="Tools" items={sendMoneyMenuItems} />
        <DropDown title="Resources" items={sendMoneyMenuItems} />
      </div>
      <div className="trailer">
        <button>login</button>
      </div>
    </div>
  );
};

export default NavBar;
