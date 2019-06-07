import React from 'react';
import classes from './Order.css';
const Order = (props) => {
    return (
        <div className = {classes.Order}> 
            <p> Ingredients Order : Total cost is 7USD</p>  
        </div>
    );
};

export default Order;