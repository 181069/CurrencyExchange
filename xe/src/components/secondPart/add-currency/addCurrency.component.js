import React from "react";
import { Collapse } from "antd";
import classes from "./add-currency.module.css";

const AddCurrency = (props) => {
  const { Panel } = Collapse;
  return (
    <Collapse>
      <Panel
        header={
          <div>
            {props.editClicked ? (
              <button disabled className={classes.addBtn}>
                <span className={classes.addCircle}>
                  <span className={classes.addIcon}>+</span>
                </span>
                Add Currency
              </button>
            ) : (
              <button className={classes.addBtn}>
                <span className={classes.addCircle}>
                  <span className={classes.addIcon}>+</span>
                </span>
                Add Currency
              </button>
            )}
          </div>
        }
        showArrow={false}
      >
        <p>Item1</p>
      </Panel>
    </Collapse>
  );
};

export default AddCurrency;
