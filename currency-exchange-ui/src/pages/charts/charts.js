import React from "react";
import "./charts.css";
import "./script.js";

import { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let country_list = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW"
};

export default function Charts() {
  // Initializing all the state variables
  const [rate, setRate] = useState(0);
  const [chartData, setChartData] = useState([{ x: 1, y: 1 }]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("ILS");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  var dps = [
    { x: 1, y: 10 },
    { x: 2, y: 13 },
    { x: 3, y: 18 },
    { x: 4, y: 20 },
    { x: 5, y: 17 },
    { x: 6, y: 10 },
    { x: 7, y: 13 },
    { x: 8, y: 18 },
    { x: 9, y: 20 },
    { x: 10, y: 17 }
  ];
  const chartOptions = {
    animationEnabled: true,

    data: [
      {
        type: "spline",
        dataPoints: chartData
      }
    ]
  };

  function refreshChart(cData) {
    //   var labels = Object.keys(cData);
    // var data = Object.entries(cData).map(([k, v]) => Object.values(v)[0]);

    var arr = [];
    for (var i = 1; i <= 12; i++) {
      var name = Object.keys(cData).find(
        (key) => new Date(key).getMonth() === i
      );

      if (name == null) continue;

      var value = Object.values(
        cData[Object.keys(cData).find((key) => new Date(key).getMonth() === i)]
      )[0];

      arr.push({ x: new Date(name), y: value });
    }

    setChartData(arr);
  }

  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
      `https://api.exchangerate.host/convert?from=${from}&to=${to}`
    ).then((res) => {
      setRate(res.data.info.rate);
      //setInfo(res.data.conversationRates[from]);
      //console.log(info);
    });

    var today = new Date();

    var currentDate = today.toISOString().slice(0, 10);

    today.setFullYear(today.getFullYear() - 1);

    var lastYear = today.toISOString().slice(0, 10);

    Axios.get(
      `https://api.exchangerate.host/timeseries?start_date=${lastYear}&end_date=${currentDate}&base=${from}&symbols=${to}`
    ).then((res) => {
      refreshChart(res.data.rates);
    });
  }, [from, to]);

  // Calling the convert function whenever

  // Function to convert the currency
  function convert(e) {
    if (e != null) e.preventDefault();

    setOutput(input * rate);
  }

  // rates change
  useEffect(() => {
    this.chart.render();
  }, [chartData]);

  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(country_list));
    convert(null);
    document.getElementById(
      "fromFlag"
    ).src = `https://flagcdn.com/48x36/${country_list[
      from.toUpperCase()
    ].toLowerCase()}.png`;

    document.getElementById(
      "toFlag"
    ).src = `https://flagcdn.com/48x36/${country_list[
      to.toUpperCase()
    ].toLowerCase()}.png`;
  }, [rate]);
  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div className="wrapper">
      <header>Currency Converter</header>
      <form>
        <div className="amount">
          <p>Enter Amount</p>
          <input
            type="number"
            min="0"
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
        <div className="drop-list">
          <div className="from">
            <p>From</p>
            <div className="select-box">
              <img id="fromFlag" alt="flag" />
              <Dropdown
                className="selectBox"
                options={options}
                onChange={(e) => {
                  setFrom(e.value);
                }}
                value={from}
                placeholder="From"
              />
            </div>
          </div>
          <div className="to">
            <p>To</p>
            <div className="select-box">
              <img id="toFlag" alt="flag" />

              <Dropdown
                className="selectBox"
                options={options}
                onChange={(e) => {
                  setTo(e.value);
                }}
                value={to}
                placeholder="To"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="exchange-rate">
          {input + " " + from + " = " + output.toFixed(2) + " " + to}
        </div>
        <button
          onClick={(e) => {
            convert(e);
          }}
        >
          Get Exchange Rate
        </button>
        <br />
        <br />
        <CanvasJSChart
          options={chartOptions}
          onRef={(ref) => (this.chart = ref)}
        ></CanvasJSChart>
      </form>
    </div>
  );
}
