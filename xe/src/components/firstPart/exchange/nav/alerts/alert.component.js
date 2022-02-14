import classes from './alert.module.css';
import exchange from './exchange.png';
import dollar from './dollar.webp';
const Alert = () => {

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
            <span className={classes.span}>Email : </span>
            <input
              type="email"
              placeholder="your email"
              className={classes.email}
            />
          </div>
          <div>
            <button className={classes.submit}>Submit</button>
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
export default Alert;
