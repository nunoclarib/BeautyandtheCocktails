import React from 'react';
import ReactDOM from 'react-dom';

//import Home from './Home';
//import About from './About';
//import Contacts from './Contacts';
//import Events from './Events';
import App from './App';
import Menu from './Menu';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Makeup from './Makeup';
//import NotFound from "./NotFound";
//import Produtos from "./Produtos";

ReactDOM.render((<Router><Menu/>
        <Switch>
            <Route  exact path="/" component={App}/>
            <Route  path="/MakeUp" component={Makeup}/>
           {/* <Route  path="/About" component={About}/>
            <Route  path='/Contacts/:id' component={Contacts} />
            <Route  path='/Contacts' component={Contacts} />
            <Route  path='/Produtos/:id' component={Produtos} />
            <Route  path='/Produtos' component={Produtos} />
            <Route  path="/Events" component={Events} />
            <Route  component={NotFound} />*/}
        </Switch>
    </Router>)
    , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

