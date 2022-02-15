import React, { useEffect, useState } from "react";
import CurrencySelector from "../components/CurrencySelector.component";
import RangeChart from "../components/RangeChart.component";
import styles from "./CurrencyCharts.module.css";
/**
 *
 * @param {Object} props
 */
const CurrencyCharts = (props) => {
  const [Data, setData] = useState(null);
  const [formData, setFormData] = useState({ from: "USD", to: "USD" });
  /**
   *
   * @param {Event} e
   */
  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    // console.log(e.target);
    params.set("from", e.target[0].value);
    params.set("to", e.target[2].value);
    fetch(
      `https://235c6408-d0ae-418a-9a74-6d31d0b3ce56.mock.pstmn.io/dev/data2`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles["CurrencyCharts"]}>
      <form onSubmit={handleSubmit}>
        <label className={styles.currencyChooser}>
          From
          <div className={styles["search-box-wrapper"]}>
            <CurrencySelector
              value={formData.from}
              onChange={handleChange}
              name="from"
            />
          </div>
        </label>
        <button type="submit" className={styles.SwapButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 17"
            aria-hidden="true"
            class="miscellany___StyledIconSwap-sc-1r08bla-1 fZJuOo"
          >
            <path
              fill="lightblue"
              fill-rule="evenodd"
              d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <label className={styles.currencyChooser}>
          To
          <div className={styles["search-box-wrapper"]}>
            <CurrencySelector
              value={formData.to}
              onChange={handleChange}
              name="to"
            />
          </div>
        </label>
      </form>
      {Data === null ? `LOADING...` : <RangeChart data={Data} />}
    </div>
  );
};

export default CurrencyCharts;
