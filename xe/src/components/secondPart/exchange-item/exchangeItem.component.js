import React from "react";
import classes from "./exchange-item.module.css";
import Chart from "../chart/chart.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const ExchangeItem = (props) => {
  const handleDelete = () => {
    if (props.handleDelete) props.handleDelete(props.numericCode);
  };

  return (
    <div className={classes.exchangeItem}>
      <div>
        <button
          className={classes.currencyBtn}
          onClick={() => {
            props.setDefaultData([
              {
                id: new Date().getTime(),
                numericCode: `${props.data[props.item].numericCode}`,
                code: props.data[props.item].code,
              },
              ...props.defaultData,
            ]);
          }}
        >
          <img
            src={`https://flagcdn.com/32x24/${props.data[props.item].code
              .substring(0, 2)
              .toLowerCase()}.png`}
            alt={props.data[props.item].code}
          />
          <span className={classes.currencyBtnTxt}>
            {" "}
            {props.data[props.item].code}{" "}
          </span>
        </button>
      </div>
      {props.inverse ? (
        <div>{props.data[props.item].inverseRate.toFixed(4)}</div>
      ) : (
        <div>{props.data[props.item].rate.toFixed(4)}</div>
      )}
      <div>
        {(
          (props.data[props.item].rate - props.data[props.item].inverseRate) /
          props.data[props.item].rate
        ).toFixed(3)}
        %
      </div>
      <div>
        <Chart />
      </div>
      <div>
        <div className={classes.btnDiv}>
          {props.editClick ? (
            <button disabled className={classes.sendBtn}>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className={classes.sendIcon}
              />
              Send
            </button>
          ) : (
            <button className={classes.sendBtn}>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className={classes.sendIcon}
              />
              Send
            </button>
          )}
          {props.editClick && (
            <button className={classes.deleteBtn} onClick={handleDelete}>
              -
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExchangeItem;
