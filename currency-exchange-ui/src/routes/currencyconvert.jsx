import React, { useState } from "react";
// // import SearchCurrency from "../components/SearchCurrency.component";
// import SelectSearch, { fuzzySearch } from "react-select-search";
import CurrencySelector from "../components/CurrencySelector.component";
import styles from "./CurrencyConvert.module.css";
// import "./selectSearch.css";
/**
 *
 * @param {Object} props
 */
const CurrencyConvert = (props) => {
  const [ConversionResult, setConversionResult] = useState(0);


  /**
   *
   * @param {Event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    // console.log(e.target);
    params.set("from", e.target[1].value);
    params.set("to", e.target[3].value);
    fetch(`http://localhost:3001/dev/convert?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setConversionResult(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles["CurrencyConvert"]}>
      convert
      <form onSubmit={handleSubmit}>
        <label>
          Amount
          <input type="number" value={1.0} />
        </label>
        <label className={styles.currencyChooser}>
          From
          <div className={styles["search-box-wrapper"]}>
            <CurrencySelector />
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
            <CurrencySelector />
          </div>
        </label>
      </form>
      <div>
        {`1 ${ConversionResult.from} = ${ConversionResult.amount} ${ConversionResult.to}s.`}
      </div>
    </div>
  );
};

export default CurrencyConvert;

/* <SelectSearch
  // className={`${styles["select-search--multiple"]} ${styles["select-search"]}`}
  className="select-search select-search--multiple"
  options={listOfCurrencies}
  value="sv"
  search
  filterOptions={fuzzySearch}
  name="currency"
  placeholder="Choose currency"
  autoComplete="true"
/> */
