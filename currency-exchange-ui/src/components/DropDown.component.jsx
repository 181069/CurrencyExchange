import React from "react";
import styles from "./DropDown.module.css";
/**
 *
 * @param {{items:{title:string, desc:string, icon:string}[]}} props
 * @returns
 */
const DropDown = (props) => {
  return (
    <div id={styles.cssmenu}>
      {/* {props.title.map((title, index) => (
        <li></li>
      ))} */}
      <a className={styles.dropdownBtn}>
        <span>About Us</span>
      </a>
      <ul>
        {props.items.map((item, index) => (
          <li className={styles.dropDownItem} key={index}>
            <a>
              <span>{item.title}</span>
              <br />
              <span className={styles.itemDesc}>{item.desc}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
