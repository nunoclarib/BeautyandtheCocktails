import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Menu from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Makeup from "./Makeup";

import "bootstrap/dist/css/bootstrap.min.css";

import NotFound from "./NotFound";
import Registo from "./Registo";
import LoginPage from "./LoginPage";

import isLooggedReducer from "./reducers/isLogged";
import { createStore } from "redux";

import { Provider } from "react-redux";
import Cocktails from "./Cocktails";
import MakeupDetail from "./MakeupDetail";
import MakeupProduct from "./MakeupProduct";
import CocktailsProduct from "./CocktailsProduto";
import CocktailsSingle from "./CocktailsSingle";

function saveToLocalStorage(state){
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)

  }
  catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try{
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) return undefined
    return JSON.parse(serializedState)
  }
  catch(e){
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage() // presiste o state no reload


const store = createStore(
  isLooggedReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=> saveToLocalStorage(store.getState())) // coloca state do redux na localStore

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={App} />

        <Route path="/makeup" exact component={MakeupProduct} />
        
        <Route path="/makeupLipsticks" exact component={Makeup} />
        <Route path="/makeup/:id" component={MakeupDetail} />
        
        <Route path="/makeupBlush" exact component={Makeup} />
        <Route path="/makeupBronzer" exact component={Makeup} />
        <Route path="/makeupBrows" exact component={Makeup} />
        <Route path="/makeupEyeliner" exact component={Makeup} />
        <Route path="/makeupBase" exact component={Makeup} />
        <Route path="/makeupEyeshadow" exact component={Makeup} />
        <Route path="/makeupLipliner" exact component={Makeup} />
        <Route path="/makeupRimel" exact component={Makeup} />


        <Route path="/cocktails" exact component={CocktailsProduct} />

        <Route path="/cocktailMargarita" exact component={Cocktails} />
        <Route path="/cocktail/:id" component={CocktailsSingle} />

        <Route path="/cocktailGin" exact component={Cocktails} />
        <Route path="/cocktailVodka" exact component={Cocktails} />
        <Route path="/cocktailRum" exact component={Cocktails} />
        <Route path="/cocktailTequila" exact component={Cocktails} />
        <Route path="/cocktailWine" exact component={Cocktails} />
        <Route path="/cocktailWine" exact component={Cocktails} />
        

        <Route path="/registo" component={Registo} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
