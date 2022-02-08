import React from "react";
import LERRow from "./LERRow";
import "./LiveExchangeRates.css";

/**
 *
 * @param {Object} props
 * @param {String[]} props.currency
 * @returns
 */
const LiveExchangeRates = (props) => {
  return (
    <table className="LiveExchangeRates">
      <tr>
        <th>inverse </th>
        <th>amount </th>
        <th>change </th>
        <th>chart </th>
        <th>edit </th>
      </tr>

      {props.currency.map((item, index) => (
        <LERRow currency={item} />
      ))}
    </table>
  );
};

export default LiveExchangeRates;
