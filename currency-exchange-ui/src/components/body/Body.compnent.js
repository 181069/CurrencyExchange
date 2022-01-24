import React from 'react';
import image from '../../assets/chart.jpg';
import classes from './Body.module.css';
const Body = () => {
    return <div className={classes.wrapper}>
        <div className={classes.email}>
            I dont know
        </div>
        <div className={classes.imgr}>
            <div className={classes.img}>
            <img src={image} alt="chart" style={{width:300}} />
            </div>
           
        </div>
    </div>;
};

export default Body;
