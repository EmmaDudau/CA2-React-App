import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListCustomerComponent from './components/ListCustomerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import ViewCustomerComponent from './components/ViewCustomerComponent';
import LoginComponent from './components/LoginComponent';
import LogoutComponent from './components/LogoutComponent';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';
import ListOrderComponent from './components/ListOrderComponent';

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
                          {/*<AuthenticatedRoute path = "/" exact component = {ListCustomerComponent}></AuthenticatedRoute>*/}
                          <AuthenticatedRoute path = "/customers" component = {ListCustomerComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/add-customer/:id" component = {CreateCustomerComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/view-customer/:id" component = {ViewCustomerComponent}></AuthenticatedRoute>

                          <AuthenticatedRoute path = "/products" component = {ListProductComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/add-product/:id" component = {CreateProductComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/view-product/:id" component = {ViewProductComponent}></AuthenticatedRoute>

                          <AuthenticatedRoute path = "/orders" component = {ListOrderComponent}></AuthenticatedRoute>


                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
