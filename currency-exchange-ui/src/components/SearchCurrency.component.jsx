import React, { useState } from "react";
import styles from "./SearchCurrency.module.css";
/**
 *
 * @param {Object} props
 */
const SearchCurrency = (props) => {
  const [Selection, setSelection] = useState("USD");
  const [SearchTerm, setSearchTerm] = useState("");

  const handleOnClick = () => {
    setSelection(null);
  };

  /**
   *
   * @param { Event } e
   */
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const listOfCurrencies = [
    { name: "USD" },
    { name: "Chinese yuan" },
    { name: "Euro" },
    { name: "Japanese yen" },
    { name: "U.K. pound" },
    { name: "U.S. dollar" },
    { name: "Algerian dinar" },
    { name: "Australian dollar" },
    { name: "Botswana pula" },
    { name: "Brazilian real" },
    { name: "Brunei dollar" },
    { name: "Canadian dollar" },
    { name: "Chilean peso" },
    { name: "Colombian peso" },
    { name: "Czech koruna" },
    { name: "Danish krone" },
    { name: "Indian rupee" },
    { name: "Israeli New Shekel" },
    { name: "Korean won" },
    { name: "Kuwaiti dinar" },
    { name: "Malaysian ringgit" },
    { name: "Mauritian rupee" },
    { name: "Mexican peso" },
    { name: "New Zealand dollar" },
    { name: "Norwegian krone" },
    { name: "Omani rial" },
    { name: "Peruvian sol" },
    { name: "Philippine peso" },
    { name: "Polish zloty" },
    { name: "Qatari riyal" },
    { name: "Russian ruble" },
    { name: "Saudi Arabian riyal" },
    { name: "Singapore dollar" },
    { name: "South African rand" },
    { name: "Swedish krona" },
    { name: "Swiss franc" },
    { name: "Thai baht" },
    { name: "Trinidadian dollar" },
    { name: "U.A.E. dirham" },
    { name: "Uruguayan peso" },
    { name: "" },
  ];

  return (
    <div className={styles["SearchCurrency"]} onClick={handleOnClick}>
      {Selection === null && (
        <>
          <input type="text" on onChange={handleOnChange} />
          <select>
            {listOfCurrencies
              .filter((currency) => currency.name.includes(SearchTerm))
              .map((currency, index) => (
                <option
                  onClick={(e) => setSelection(currency.name)}
                  className={styles.CurrencyOption}
                >
                  {currency.name}
                </option>
              ))}
          </select>
        </>
      )}

      {Selection !== null && (
        <button onClick={handleOnClick}>{Selection.name}</button>
      )}
    </div>
  );
};

export default SearchCurrency;
