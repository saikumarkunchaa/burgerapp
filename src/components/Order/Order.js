import React from 'react';
import classes from './Order.css';
const Order = (props) => {
    const Ingredients = [];
    for (let IngredientName in props.ingredients) {
        Ingredients.push({
            name:IngredientName,
            amount: props.ingredients[IngredientName]
        });
    }
    const ingredientsOuput = Ingredients.map(ig => {
        return <span key = {ig.name} style = {{
            textTransform:'capitalize',
            display: 'inline-block',
            margin:'0 8px',
            border:'1px solid #ccc',
            padding:'5px'
        }}>{ig.name} ({ig.amount})</span>;
    })                  
    return (
        <div className = {classes.Order}> 
            {ingredientsOuput}
            <p>Price: <strong>USD {props.price}</strong></p> 
        </div>
    );
};

export default Order;