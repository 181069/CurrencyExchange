import { useState } from "react";
import classes from "./exchange.module.css";
import Alert from "./nav/alerts/alert.component";
import Chart from "./nav/charts/charts.component";
import Convert from "./nav/convert/convert.component";
import Send from "./nav/send/send.component";
const Exchange = () => {
  const [part1, setPart1] = useState(true);
  const [part2, setPart2] = useState(false);
  const [part3, setPart3] = useState(false);
  const [part4, setPart4] = useState(false);
  return (
    <div className={classes.wrapper}>
      <div className={classes.nav}>
        <div className={classes.convert}>
          <button
            className={classes.sp1}
            onClick={() => {
              setPart1(true);
              setPart2(false);
              setPart3(false);
              setPart4(false);
            }}
          >
            Convert
          </button>
        </div>
        <div className={classes.send}>
          <button
            className={classes.sp2}
            onClick={() => {
              setPart1(false);
              setPart2(true);
              setPart3(false);
              setPart4(false);
            }}
          >
            Send
          </button>
        </div>
        <div className={classes.charts}>
          <button
            className={classes.sp3}
            onClick={() => {
              setPart1(false);
              setPart2(false);
              setPart3(true);
              setPart4(false);
            }}
          >
            Charts
          </button>
        </div>
        <div className={classes.alerts}>
          <button
            className={classes.sp4}
            onClick={() => {
              setPart1(false);
              setPart2(false);
              setPart3(false);
              setPart4(true);
            }}
          >
            Alerts
          </button>
        </div>
      </div>
      {part1 && <Convert />}
      {part2 && <Send />}
      {part3 && <Chart />}
      {part4 && <Alert />}
    </div>
  );
};
export default Exchange;
