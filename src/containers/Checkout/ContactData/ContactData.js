import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/spinner/Spinner';
import {withRouter} from 'react-router-dom';
class ContactData extends Component {
    state = {
        name: '',
        email:'',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false

    }
    orderHandler = (event) => {
        event.preventDefault(); 
        this.setState({loading:true});
        const order = {
            ingerdients: this.props.ingredients,
            totalPrice : this.props.price,
            customer: {
                name: 'Kiran',
                address: {
                    street: 'SRT-363',
                    city:'Hyderabad'
                },
                email: 'kuncha.skumar@gmail.com',
                deiveryMethod: 'fastest'
            }
        }
        axios.post('/orders.json',order)
         .then(response=>{
             this.setState({loading: false});
             this.props.history.push('/');
         })
        .catch(error => {
            this.setState({loading: false});
        });
    }
    render() {
        let form = ( 
             <form>
            <input type = 'text' className = {classes.Input} name = 'name' placeholder = 'your Name' />
            <input type = 'email' className = {classes.Input} name = 'email' placeholder = 'your Email' />
            <input type = 'text' className = {classes.Input} name = 'street' placeholder = 'Street' />
            <input type = 'text' className = {classes.Input} name = 'Postal' placeholder = 'Postal Code' />
            <Button btnType = 'Success' clicked = {this.orderHandler}>ORDER</Button>
        </form>);
        if(this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className = {classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default withRouter(ContactData);