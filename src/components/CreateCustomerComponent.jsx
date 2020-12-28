import React, {Component} from 'react'
import CustomerService from '../services/CustomerService';

class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            surName: '',
            email: '',
            address: '',
            phone: '',
            createDate: '',
            input: {},
            errors: {}

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeSurNameHandler = this.changeSurNameHandler.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }

    // step 3
    componentDidMount() {
        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            CustomerService.getCustomerById(this.state.id).then((res) => {
                let customer = res.data;
                this.setState({
                    firstName: customer.firstName,
                    surName: customer.surName,
                    address: customer.address,
                    email: customer.email,
                    phone: customer.phone,
                    createDate: customer.createDate
                });
            });
        }
    }

    saveOrUpdateCustomer = (e) => {
        e.preventDefault();

        if(this.validate()) {
            console.log(this.state);

            let input = {};
            input["firstName"] = "";
            input["email"] = "";
            input["comment"] = "";
            this.setState({input: input});

            let customer = {
                firstName: this.state.firstName, surName: this.state.surName, address: this.state.address,
                email: this.state.email, phone: this.state.phone, createDate: this.state.createDate
            };
            console.log('customer => ' + JSON.stringify(customer));

            // step 5
            if (this.state.id === '_add') {
                CustomerService.createCustomer(customer).then(res => {
                    this.props.history.push('/customers');
                });
            } else {
                CustomerService.updateCustomer(customer, this.state.id).then(res => {
                    this.props.history.push('/customers');
                });
            }
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeSurNameHandler = (event) => {
        this.setState({surName: event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changePhoneHandler = (event) => {
        this.setState({phone: event.target.value});
    }

    changeCreateDateHandler = (event) => {
        this.setState({createDate: event.target.value});
    }

    cancel() {
        this.props.history.push('/customers');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Customer</h3>
        } else {
            return <h3 className="text-center">Update Customer</h3>
        }
    }


    validate(){
        let errors = {};
        let isValid = true;

        if (!this.state.firstName) {
            isValid = false;
            errors["firstName"] = "Please enter your name.";
        }

        if (!this.state.email) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof this.state.email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }



    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }

                                <form onSubmit={this.handleSubmit}>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control"
                                                   value={this.state.firstName}  onChange={this.changeFirstNameHandler}/>
                                            <div className="text-danger">{this.state.errors.firstName}</div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="surName" className="form-control"
                                                   value={this.state.surName} onChange={this.changeSurNameHandler}/>
                                        </div>
                                    </div>
                                    <div class="form-row">

                                        <div class="form-group col-md-6">
                                            <label> Address: </label>
                                            <input placeholder="Address" name="address" className="form-control"
                                                   value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label> Email: </label>
                                            <input placeholder="Email Address" name="email" className="form-control"
                                                   value={this.state.email} onChange={this.changeEmailHandler}/>
                                            <div className="text-danger">{this.state.errors.email}</div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label> Phone Number: </label>
                                            <input type="number" placeholder="Phone" name="phone" className="form-control"
                                                   value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label> Created Date: </label>
                                            <input placeholder="Created Date" type="date" name="createDate" max="3000-12-31"
                                                   min="1000-01-01" value={this.state.createDate}
                                                   onChange={this.changeCreateDateHandler} className="form-control"/>
                                        </div>
                                    </div>

                                    <button class="btn btn-success btn float-left" onClick={this.saveOrUpdateCustomer}>Save</button>
                                    <button class="btn btn-danger btn float-right" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

        )
    }
}

export default CreateCustomerComponent
