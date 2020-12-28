import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from './Menu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Makeup from './Makeup';

import 'bootstrap/dist/css/bootstrap.min.css'

import NotFound from "./NotFound";
import Registo from './Registo';
import LoginPage from './LoginPage';

import isLooggedReducer from './reducers/isLogged'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    isLooggedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

ReactDOM.render((<Provider store={store}>
    <Router>
        <Menu/>
        <Switch>
        <Route  exact path="/" component={App}/>
        <Route  path="/makeup" component={Makeup}/>
        <Route  path="/registo" component={Registo}/>
        <Route  path="/login" component={LoginPage}/> 
        <Route  component={NotFound} />
        </Switch>
    </Router>
    </Provider>)
    , document.getElementById('root'));
