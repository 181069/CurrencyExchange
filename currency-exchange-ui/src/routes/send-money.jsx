import React from "react";
import styles from "./SendMoney.module.css";
/**
 *
 * @param {Object} props
 */
const SendMoney = (props) => {
  return (
    <div className={styles["SendMoney"]}>
      send
      <div>
        <h2 class="heading__Heading1-n07sti-0 heading__Heading2-n07sti-1 iXbZUl">
          Sorry, we can't send money from your country yet
        </h2>
        <p class="paragraph__Paragraph-sc-1y1xjre-0 fqOqID">
          We are always expanding our service though, so please check again in
          the future.
        </p>
      </div>
      <div>
        <h2 class="heading__Heading1-n07sti-0 heading__Heading2-n07sti-1 iXbZUl">
          The fast &amp; trusted way to send money
        </h2>
      </div>
    </div>
  );
};

export default SendMoney;
