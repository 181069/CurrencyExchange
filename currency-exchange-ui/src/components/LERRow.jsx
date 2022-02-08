import React, { useEffect, useState } from "react";
import CurrencyHistogram from "./CurrencyHistogram";
import "./LERRow.css";

/**
 *
 * @param {Object} props
 * @param {string} props.currency
 * @param {string} props.amount
 * @param {string} props.change
 * @param {number[]} props.chart
 * @returns
 */
const LERRow = (props) => {
  

  
  const [Data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://235c6408-d0ae-418a-9a74-6d31d0b3ce56.mock.pstmn.io/dev/data2"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
    console.log(Data);
    return () => {};
  }, []);

  return (
    <tr className="LERRow">
      <td>{props.currency}</td>
      <td>{props.amount}</td>
      <td>{props.change + "%"}</td>
      <td>
        {Data === null ? (
          "LOADING"
        ) : (
          <CurrencyHistogram data={Data} positiveChange={true} />
        )}
      </td>
      <td></td>
    </tr>
  );
};

export default LERRow;
