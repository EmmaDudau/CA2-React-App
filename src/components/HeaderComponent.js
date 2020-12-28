import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../services/AuthenticationService';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.ncirl.ie/" className="navbar-brand">Customer Order Management App</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn &&    <li><Link className="nav-link" to="/customers">Customers</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/products">Products</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(HeaderComponent)
