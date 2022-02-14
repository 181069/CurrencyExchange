import React, { useState } from "react";
import classes from "./send.module.css";
import { BsCheckCircle, BsBank2 } from "react-icons/bs";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

export const Send = (props) => {
  const { currencies } = props;
  const [paymentInfo, setpaymentInfo] = useState({
    sender: "",
    reciever: "",
    amount: " ",
    currency: "",
    paymentMethod: "Visa Card",
  });
  const [senderAlertMessage, setSenderAlertMessage] = useState("");
  const [receiverAlertMessage, setReceiverAlertMessage] = useState("");
  const [amountAlertMessage, setAmountAlertMessage] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setpaymentInfo({ ...paymentInfo, [name]: value });
  };
  const handleSend = () => {
    const senderValid = false, receiverValid = false,amountValid = false;

    if (paymentInfo.reciever.length <= 3) {
      setReceiverAlertMessage("receiver name should be at least 3 characters");
    } else {
      receiverValid = true;
    }
    if (paymentInfo.reciever.length <= 3) {
      setSenderAlertMessage("sender name should be at least 3 characters");
    } else {
      senderValid = true;
    }
    if (paymentInfo.amount < 50) {
      setAmountAlertMessage("amount should be at least 50");
    } else {
      amountValid = true;
    }
    if(receiverValid && senderValid && amountValid){

    }
  };
  return (
    <div className={classes.sendContainer}>
      <div className={classes.formContainer}>
        <div className={classes.inputs}>
          <div className={classes.senderAndReceiver}>
            <div className={classes.inputContainer}>
              <label>Sender:</label>
              <input onChange={handleChange} name="sender" type="text"></input>
              {senderAlertMessage && (
                <span className={classes.alertText}>{senderAlertMessage}</span>
              )}
            </div>
            <div className={classes.inputContainer}>
              <label>Receiver:</label>
              <input
                onChange={handleChange}
                name="receiver"
                type="text"
              ></input>
              {receiverAlertMessage && (
                <span className={classes.alertText}>
                  {receiverAlertMessage}
                </span>
              )}
            </div>
          </div>
          <div className={classes.inputContainer}>
            <label>Amount:</label>
            <input
              onChange={handleChange}
              name="amount"
              type="number"
              min={1}
            ></input>
            {amountAlertMessage && (
              <span className={classes.alertText}>{amountAlertMessage}</span>
            )}
          </div>
          <div className={classes.inputContainer}>
            <label>currency:</label>
            <select
              className={classes.select}
              onChange={handleChange}
              name="currency"
              type="text"
            >
              {currencies.map((item, index) => (
                <option key={index}>
                  {item.name} ({item.symbol})
                </option>
              ))}
            </select>
          </div>
          <div className={classes.inputContainer}>
            <label>Payment Method:</label>
            <select
              onChange={handleChange}
              name="paymentMethod"
              className={classes.select}
            >
              <option className={classes.option}>Visa Card</option>
              <option className={classes.option}>Mastercard</option>
              <option className={classes.option}>American Express</option>
              <option className={classes.option}>Apple Pay</option>
              <option className={classes.option}>Google Pay</option>
              <option className={classes.option}>Alipay</option>
              <option className={classes.option}>PayPal</option>
            </select>
          </div>
        </div>
        <button onClick={handleSend} className={classes.sendButton}>
          Send
        </button>
      </div>
      <div className={classes.aboutContainer}>
        <h3>The fast & trusted way to send money</h3>
        <span>
          Millions of people check our rates and send money with us every day
        </span>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <BsCheckCircle className={classes.checkIcon} />
            See our low fees and exchange rates in real-time
          </li>
          <li className={classes.listItem}>
            <BsCheckCircle className={classes.checkIcon} />
            Transparent delivery times so you can move money fast
          </li>
          <li className={classes.listItem}>
            <BsCheckCircle className={classes.checkIcon} />
            Sign up for a free personal or business account in minutes
          </li>
        </ul>
        <div className={classes.paymentIcons}>
          <FaCcVisa className={classes.paymentIconFill} />
          <FaCcMastercard className={classes.paymentIconFill} />
          <div className={classes.paymentText}>EFT</div>
          <div className={classes.paymentText}>ACH</div>
          <div className={classes.paymentText}>WIRE</div>
          <div className={classes.paymentIcon}>
            <BsBank2 />
          </div>
        </div>
      </div>
    </div>
  );
};
