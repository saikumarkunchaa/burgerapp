import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/spinner/Spinner';
class Orders extends Component {
    state = {
        orders: '',
        loading: false
    }
    componentDidMount() {
        axios.get('https://burgerdemoapp.firebaseio.com/orders.json')
            .then(res => {
                const fetchingOrders = [];
                for (let key in res.data) {
                    fetchingOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                
                this.setState({ loading: false, orders: fetchingOrders });
            }).catch(err => {
                this.setState({ loading: false });
            })
    }
    render() {
       
        if (this.state.orders === '') {
            return <Spinner />;
        } else {
            return (
                <div>
                    {this.state.orders.map(order => (
                            <Order id = {order.id}
                                    ingredients ={order.ingerdients}
                                    price={order.totalPrice}/>
                        ))}
                </div>
            );
        }
    }
}

export default withErrorHandler(Orders, axios);