import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'}

];
const BuildControls = (props) => (
        
        <div className = {classes.BuildControls}>
        <p>Current Price: {props.price}</p>
        {
            controls.map(ctrl => (
                <BuildControl  key = {ctrl.label} 
                label = {ctrl.label}
                added = {() => props.ingredientsAdded(ctrl.type)} 
                removed = {() => props.ingredientsRemoved(ctrl.type)} 
                type = {ctrl.type}
                disabled = {props.disabled[ctrl.type]} 
                />
            ))
        }
            <button className = {classes.OrderButton} disabled = {!props.purchasAble} onClick = {props.ordered}>Order Now</button>
            
        </div>
    );

export default BuildControls;