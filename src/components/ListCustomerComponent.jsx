import React, {Component} from 'react'
import CustomerService from '../services/CustomerService'

class ListCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(id) {
        CustomerService.deleteCustomer(id).then(res => {
            this.setState({customers: this.state.customers.filter(customer => customer.id !== id)});
        });
    }

    viewCustomer(id) {
        this.props.history.push(`/view-customer/${id}`);
    }

    editCustomer(id) {
        this.props.history.push(`/add-customer/${id}`);
    }

    componentDidMount() {
        CustomerService.getCustomers().then((res) => {
            this.setState({customers: res.data});
        });
    }

    addCustomer() {
        this.props.history.push('/add-customer/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Customer List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addCustomer}> Add Customer</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Address</th>
                            <th> Email</th>
                            <th> Phone</th>
                            <th> Date created</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.customers.map(
                                customer =>
                                    <tr key={customer.id}>
                                        <td> {customer.firstName} </td>
                                        <td> {customer.surName}</td>
                                        <td> {customer.address}</td>
                                        <td> {customer.email}</td>
                                        <td> {customer.phone}</td>
                                        <td> {customer.createDate}</td>
                                        <td>
                                            <button onClick={() => this.editCustomer(customer.id)}
                                                    className="btn btn-info">Update
                                            </button>
                                            <button style={{marginLeft: "10px"}}
                                                    onClick={() => this.deleteCustomer(customer.id)}
                                                    className="btn btn-danger">Delete
                                            </button>
                                            <button style={{marginLeft: "10px"}}
                                                    onClick={() => this.viewCustomer(customer.id)}
                                                    className="btn btn-info">View
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

export default ListCustomerComponent
