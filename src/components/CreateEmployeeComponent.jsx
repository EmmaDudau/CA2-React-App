import React, {Component} from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
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
            createDate: ''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeSurNameHandler = this.changeSurNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    surName: employee.surName,
                    address: employee.address,
                    email: employee.email,
                    phone: employee.phone,
                    createDate: employee.createDate
                });
            });
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName, surName: this.state.surName, address: this.state.address,
            email: this.state.email, phone: this.state.phone, createDate: this.state.createDate
        };
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
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
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Customer</h3>
        } else {
            return <h3 className="text-center">Update Customer</h3>
        }
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

                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control"
                                                   value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
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
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label> Phone Number: </label>
                                            <input placeholder="Phone" name="phone" className="form-control"
                                                   value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label> Created Date: </label>
                                            {/*<input placeholder="Created Date" name="createDate" className="form-control"*/}
                                                   {/*value={this.state.createDate}*/}
                                                   {/*onChange={this.changeCreateDateHandler}/>*/}
                                            <input placeholder="Created Date" type="date" name="createDate" max="3000-12-31"
                                                   min="1000-01-01" value={this.state.createDate}
                                                   onChange={this.changeCreateDateHandler} className="form-control"/>
                                        </div>
                                    </div>

                                    <button class="btn btn-success btn float-left" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button class="btn btn-danger btn float-right" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

        )
    }
}

export default CreateEmployeeComponent
