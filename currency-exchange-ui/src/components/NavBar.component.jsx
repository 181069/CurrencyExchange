import React from "react";

import styles from './NavBar.module.css';
const NavBar = (props) => {
  return (
    <div className={styles.NavBar}>
      <div className="home"></div>
      <div className={styles.ribbon}>
        <div>Converter</div>
        <div>Send money</div>
        <div>Business and API</div>
        <div>Tools</div>
        <div>Resources</div>
      </div>
      <div className="trailer">
          <button>login</button>
      </div>
    </div>
  );
};

export default NavBar;
