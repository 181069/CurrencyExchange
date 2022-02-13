import React, { useState } from "react";
// import SearchCurrency from "../components/SearchCurrency.component";
import SelectSearch, { fuzzySearch } from "react-select-search";
import styles from "./CurrencyConvert.module.css";
import "./selectSearch.css";
/**
 *
 * @param {Object} props
 */
const CurrencyConvert = (props) => {
  const [ConversionResult, setConversionResult] = useState(0);

  const listOfCurrencies = [
    { name: "USD", value: "USD" },
    { name: "Chinese yuan", value: "Chinese yuan" },
    { name: "Euro", value: "Euro" },
    { name: "Japanese yen", value: "Japanese yen" },
    { name: "U.K. pound", value: "U.K. pound" },
    { name: "U.S. dollar", value: "U.S. dollar" },
    { name: "Algerian dinar", value: "Algerian dinar" },
    { name: "Australian dollar", value: "Australian dollar" },
    { name: "Botswana pula", value: "Botswana pula" },
    { name: "Brazilian real", value: "Brazilian real" },
    { name: "Brunei dollar", value: "Brunei dollar" },
    { name: "Canadian dollar", value: "Canadian dollar" },
    { name: "Chilean peso", value: "Chilean peso" },
    { name: "Colombian peso", value: "Colombian peso" },
    { name: "Czech koruna", value: "Czech koruna" },
    { name: "Danish krone", value: "Danish krone" },
    { name: "Indian rupee", value: "Indian rupee" },
    { name: "Israeli New Shekel", value: "Israeli New Shekel" },
    { name: "Korean won", value: "Korean won" },
    { name: "Kuwaiti dinar", value: "Kuwaiti dinar" },
    { name: "Malaysian ringgit", value: "Malaysian ringgit" },
    { name: "Mauritian rupee", value: "Mauritian rupee" },
    { name: "Mexican peso", value: "Mexican peso" },
    { name: "New Zealand dollar", value: "New Zealand dollar" },
    { name: "Norwegian krone", value: "Norwegian krone" },
    { name: "Omani rial", value: "Omani rial" },
    { name: "Peruvian sol", value: "Peruvian sol" },
    { name: "Philippine peso", value: "Philippine peso" },
    { name: "Polish zloty", value: "Polish zloty" },
    { name: "Qatari riyal", value: "Qatari riyal" },
    { name: "Russian ruble", value: "Russian ruble" },
    { name: "Saudi Arabian riyal", value: "Saudi Arabian riyal" },
    { name: "Singapore dollar", value: "Singapore dollar" },
    { name: "South African rand", value: "South African rand" },
    { name: "Swedish krona", value: "Swedish krona" },
    { name: "Swiss franc", value: "Swiss franc" },
    { name: "Thai baht", value: "Thai baht" },
    { name: "Trinidadian dollar", value: "Trinidadian dollar" },
    { name: "U.A.E. dirham", value: "U.A.E. dirham" },
    { name: "Uruguayan peso", value: "Uruguayan peso" },
    { name: "", value: "" },
  ];

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
          <input type="number" />
        </label>
        <label className={styles.currencyChooser}>
          From
          <SelectSearch
            // className={`${styles["select-search--multiple"]} ${styles["select-search"]}`}
            className="select-search select-search--multiple"
            options={listOfCurrencies}
            value="sv"
            search
            filterOptions={fuzzySearch}
            name="currency"
            placeholder="Choose currency"
            autoComplete="true"
          />
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
          <SelectSearch
            // className={`${styles["select-search--multiple"]} ${styles["select-search"]}`}
            className="select-search select-search--multiple"
            options={listOfCurrencies}
            value="sv"
            search
            filterOptions={fuzzySearch}
            name="currency"
            placeholder="Choose currency"
            autoComplete="true"
          />
        </label>
      </form>
      <div>
        {`1 ${ConversionResult.from} = ${ConversionResult.amount} ${ConversionResult.to}s.`}
      </div>
    </div>
  );
};

export default CurrencyConvert;
