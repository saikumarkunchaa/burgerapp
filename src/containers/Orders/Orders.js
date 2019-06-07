import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {
    state = {
        orders:null,
        loading:false
    }
    componentDidMount() {
        axios.get('https://burgerdemoapp.firebaseio.com/orders.json')
        .then(res => {
            const fetchingOrders = [];
            for(let key in res.data) {
                fetchingOrders.push({
                    ...res.data[key],
                    id:key
                })
            }
            console.log('orders api',fetchingOrders);
            this.setState({loading:false,orders: fetchingOrders});
        }).catch(err => {
            this.setState({loading:false});
        }) 
    }
    render() {
        return (
            <div>
                {this.state.orders.map(order =>(
                    <Order />
                ))}
                <Order />
                <Order />
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);