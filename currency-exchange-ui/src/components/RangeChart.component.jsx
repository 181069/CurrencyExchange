import React from "react";
import styles from "./RangeChart.module.css";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

//npm install highcharts-react-official
//npm install highcharts
// npm install highcharts-react-official
// run these first !!!!
/**
 *
 * @param {Object} props
 * @param {number[]} props.data
 */
const RangeChart = (props) => {
  const options = {
    chart: {
      height: 300,
      width: 650,
      type: "line",
    },
    title: {
      text: "My stock chart",
    },
    series: [
      {
        data: props.data,
      },
    ],
  };

  console.log(props.data)

  return (
    <div className={styles["RangeChart"]}>
      <HighchartsReact
        className={styles.chart}
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default RangeChart;
