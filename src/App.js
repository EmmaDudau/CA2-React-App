import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
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
                          <AuthenticatedRoute path = "/" exact component = {ListEmployeeComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/employees" component = {ListEmployeeComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/add-employee/:id" component = {CreateEmployeeComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/view-employee/:id" component = {ViewEmployeeComponent}></AuthenticatedRoute>

                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
