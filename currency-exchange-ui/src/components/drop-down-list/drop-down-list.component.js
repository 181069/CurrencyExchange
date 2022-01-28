import classes from './drop-down-list.module.css'
import React from 'react'

const DropDownList = (props) => {
    return (
        <div className={classes.dropDownDiv}>
           
            <select className={classes.select} onChange={props.onSelectCurrencyHandler}>
                {
                    Object.keys(props.list).map((key, index) => (
                        <option value={props.list[key].currencyId} key={index}>
                            {/* <img src='https://flagcdn.com/20x15/ps.png' /> */}
                            {/* {props.flags["ps"]} */}
                            {props.list[key].currencyId} - {props.list[key].currencyName}
                            {/* {console.log("value", props.list[key].id)} */}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default DropDownList;
