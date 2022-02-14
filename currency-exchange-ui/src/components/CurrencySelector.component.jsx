import React from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "./CurrencySelector.css";
/**
 *
 * @param {Object} props
 */
const CurrencySelector = (props) => {
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

  return (
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
  );
};

export default CurrencySelector;
