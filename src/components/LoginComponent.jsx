import React, { Component } from 'react'
import AuthenticationService from '../services/AuthenticationService';
import '../style.css';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/employees`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }

    render() {
        return (
            <div class="login-form">
                <h2>Login</h2>
                        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                        {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                <div className="form-group">
                        <input class="form-control" type="text" placeholder="Username"  name="username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                        <input class="form-control" type="password"  placeholder="Password"  name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>

        )
    }
}

export default LoginComponent
