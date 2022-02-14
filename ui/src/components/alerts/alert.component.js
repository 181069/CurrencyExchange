import classes from './alert.module.css';
import exchange from './exchange.png';
import dollar from './dollar.webp';
import React,{useState} from 'react'

const Alerts = () => {

  const [userInfo, setUserInfo] = useState({
    name:"",
    email:"",
  });
  const [emailAlertMessage, setEmailAlertMessage] = useState("");
  const [nameAlertMessage, setNameAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange=(e)=>{
    setEmailAlertMessage("");
    setNameAlertMessage("");
    const name = e.target.name, value = e.target.value;
    setUserInfo({...userInfo,[name]:value.trim()});
  }
  const isEmailValid = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubscribe = async () => {
    let nameValid = false, emailValid = false;

    if (!isEmailValid(userInfo.email)) {
      setEmailAlertMessage("email is not valid");
    } else emailValid = true;
    if(userInfo.name.length < 3){
      setNameAlertMessage("name must contains at least 3 characters");
    } else nameValid = true;

    if(emailValid && nameValid) {
      await fetch("http://localhost:3004/records/addNewRecord", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then(async (res) => {
          const response = await res.json();
          console.log(response);
          if(response === 'successfully added a new record'){
          setIsSuccess(true);
          setUserInfo({
            name:"",
            email:""
          })
        } else setEmailAlertMessage(response);
        })
        .catch((err) => {
          setIsSuccess(false);
          console.error(err);
        });
    }
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.col1}>
        <div className={classes.part1}>
          <div className={classes.head}>
            Send us your email to receive continuous information regarding
            currency rates change.
          </div>
        </div>
        <div className={classes.part2}>
        <div className={classes.emailSection}>
            <span className={classes.span}>Name : </span>
            <input
              onChange={handleChange}
              name='name'
              type="text"
              placeholder="your name"
              className={classes.email}
            />
          </div>
          {nameAlertMessage.length > 0 && <span className={classes.alertMessage}>{nameAlertMessage}</span>}
          <div className={classes.emailSection}>
            <span className={classes.span}>Email : </span>
            <input
              onChange={handleChange}
              name='email'
              type="email"
              placeholder="your email"
              className={classes.email}
            />
          </div>
          {emailAlertMessage.length > 0 && <span className={classes.alertMessage}>{emailAlertMessage}</span>}
          <div>
            <button onClick={handleSubscribe} className={classes.submit}>Submit</button>
          </div>
        </div>
      </div>
      <div className={classes.col2}>
        <img src={exchange} alt="an error" className={classes.img} />
        <img src={dollar} alt="an error" className={classes.img2} />
      </div>
    </div>
  );
};
export default Alerts;
