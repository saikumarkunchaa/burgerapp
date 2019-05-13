import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const Ingredient_Prices = {
    cheese:0.5,
    salad:1,
    meat:2,
    bacon:0.5
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese:0,
            salad: 0,
            meat:0,
            bacon:0,
        },
        totalPrice:4,
        purchaseAble: false,
        purchasing: true
    };
    updatePurchaseState = () => {
        const ingredients = {...this.state.ingredients}
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum,el) => {
            return sum = sum+el;
        },0);
        this.setState({purchaseAble : sum >0});
           
    }
    addIngredientHandler = (type) => {
        const oldCount =  this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAditton = Ingredient_Prices[type];
        const OldPrice = this.state.totalPrice;
        const NewPrice = OldPrice + priceAditton;
        this.setState({totalPrice: NewPrice,ingredients:updatedIngredients})
        this.updatePurchaseState();
    }
    removeIngredientHandler = (type) => {
        const oldCount =  this.state.ingredients[type];
        if(oldCount === 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceDeduction = Ingredient_Prices[type];
        const OldPrice = this.state.totalPrice;
        const NewPrice = OldPrice - priceDeduction;
        this.setState({totalPrice: NewPrice,ingredients:updatedIngredients})
        this.updatePurchaseState();
    }
    purchaseHandler() {
        this.setState({purchasing: true});
    }
    render() {
        const disabledInfo = {...this.state.ingredients}
        for( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        return (
            <Aux>
                <Modal >
                <OrderSummary ingredients = {this.state.ingredients}/>
                </Modal>
               <Burger ingredients = {this.state.ingredients}/>
               <Buildcontrols ingredientsAdded = {this.addIngredientHandler} 
                              ingredientsRemoved = {this.removeIngredientHandler}
                              disabled = {disabledInfo} 
                              price = {this.state.totalPrice}
                              purchasAble = {this.state.purchaseAble}
                            />
            </Aux>
        );
    }
}

export default BurgerBuilder;