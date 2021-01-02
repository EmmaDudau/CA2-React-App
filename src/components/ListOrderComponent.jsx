import React, {Component} from 'react'
import OrderService from '../services/OrderService'

class ListOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    deleteOrder(id) {
        OrderService.deleteOrder(id).then(res => {
            this.setState({orders: this.state.orders.filter(customer => customer.id !== id)});
        });
    }


    componentDidMount() {
        OrderService.getOrders().then((res) => {
            this.setState({orders: res.data});
        });
    }


    render() {
        return (
            <div>
                <h2 className="text-center mt-3">Customer Order List</h2>

                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Created Date</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.orders.map(
                                order =>
                                    <tr key={order.orderId}>
                                        <td> {order.orderId} </td>
                                        <td> {order.productName} </td>
                                        <td> {order.quantity}</td>
                                        <td> {order.orderDate}</td>
                                        <td>
                                            <button style={{marginLeft: "10px"}}
                                                    onClick={() => this.deleteCustomer(order.orderId)}
                                                    className="btn btn-danger">Delete
                                            </button>

                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListOrderComponent
