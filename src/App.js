import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCustomerComponent from './components/ListCustomerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import ViewCustomerComponent from './components/ViewCustomerComponent';
import LoginComponent from './components/LoginComponent';
import LogoutComponent from './components/LogoutComponent';
import AuthenticatedRoute from './components/AuthenticatedRoute';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                          <Route path="/" exact component={LoginComponent} />
                          <Route path="/login" exact component={LoginComponent} />
                          <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                          <AuthenticatedRoute path = "/" exact component = {ListCustomerComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/customers" component = {ListCustomerComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/add-customer/:id" component = {CreateCustomerComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/view-customer/:id" component = {ViewCustomerComponent}></AuthenticatedRoute>

                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
