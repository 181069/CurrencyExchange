import React from "react";
import { Link } from "react-router-dom";
import styles from "./TabBox.module.css";
/**
 *
 * @param {Object} props
 */
const TabBox = (props) => {
  return (
    <div className={styles["TabBox"]}>
      <div className={styles.TabRow}>
          <Link className={styles.Tab} to="/currencycharts">Charts</Link>
          <Link className={styles.Tab} to="/send-money">Send</Link>
          <Link className={styles.Tab} to="/currencyconverter">Convert</Link>
          <Link className={styles.Tab} to="/ratealerts">Alerts</Link>
      </div>
    </div>
  );
};

export default TabBox;
