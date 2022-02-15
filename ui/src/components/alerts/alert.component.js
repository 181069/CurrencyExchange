import classes from "./alert.module.css";
import alerts from "./alerts.png";
import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";

const Alerts = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });
  const [emailAlertMessage, setEmailAlertMessage] = useState("");
  const [nameAlertMessage, setNameAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setEmailAlertMessage("");
    setNameAlertMessage("");
    const name = e.target.name,
      value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value.trim() });
  };
  const isEmailValid = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleBack= () => {
    setIsSuccess(false);
  }

  const handleSubscribe = async () => {
    let nameValid = false,
      emailValid = false;

    if (!isEmailValid(userInfo.email)) {
      setEmailAlertMessage("email is not valid");
    } else emailValid = true;
    if (userInfo.name.length < 3) {
      setNameAlertMessage("name must contains at least 3 characters");
    } else nameValid = true;

    if (emailValid && nameValid) {
      await fetch("http://localhost:3004/records/addNewRecord", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then(async (res) => {
          await res.json();
          setIsSuccess(true);
            setUserInfo({
              name: "",
              email: "",
            });
        })
        .catch((err) => {
          setIsSuccess(false);
          console.error(err);
        });
    }
  };
  
  return (
    
    <div className={classes.wrapper}>{isSuccess && (
            <div className={classes.successMessageContainer}>
              <FiCheckCircle size={70} className={classes.successIcon} />
              <span onClick={handleBack} className={classes.successMessage}>
                Subscribed !
              </span>
              <div onClick={handleBack} className={classes.backContainer}>
                <BiArrowBack size={20} className={classes.backIcon} />
                <span className={classes.back}>Go back</span>
              </div>
            </div>
          )}
          
      {!isSuccess && (<div className={classes.col1}>
        <div className={classes.part1}>
            <h3 className={classes.TextLarge}>Let us watch the market for you</h3>
            <span className={classes.spanTextSmall}>Currency markets are always moving. <br></br>
            Set an alert so you never miss your desired rate.</span>         
        </div>
        
        <div className={classes.inputs}>
            <div className={classes.inputContainer}>
              <label className={classes.label}>Name : </label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Enter your name"
                className={classes.input}
              />
            </div>
          {nameAlertMessage.length > 0 && (
            <span className={classes.alertMessage}>{nameAlertMessage}</span>
          )}
          <div className={classes.inputContainer}>
            <label className={classes.label}>Email : </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter your email"
              className={classes.input}
            />
          </div>
          {emailAlertMessage.length > 0 && (
            <span className={classes.alertMessage}>{emailAlertMessage}</span>
          )}
          <div className={classes.buttonContainer}>
            <button onClick={handleSubscribe} className={classes.getAlertsButton}>
              Get Rate Alerts
            </button>
          </div>
         
        </div>
      </div> )}
      <div className={classes.col2}>
        <img src={alerts} alt="alerts" className={classes.img} />
      </div>
    </div>
  );
};
export default Alerts;
