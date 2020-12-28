import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import './bootstrap.css'
import MakeupList from './MakeupList'

import firebase_app from "./config/firebase"
import {Button} from "react-bootstrap"

class Makeup extends Component {
    constructor(props){
        super (props)
        this.state={
            makeup: "",
            pesquisa: ""
        }         
    }

/*
    async componentDidMount(){
    
        const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=colourpop"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({makeup: data})
        
    }
    */
   
    componentDidMount(){
    const api = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick` // pesquisar lipsticks por marca
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    
    const promise_api = (api) => {
        return new Promise((fullfill, rejected) => {
    
            const request = new XMLHttpRequest();
            request.open('GET', api, true)
            request.onload = () => {
                if (request.readyState === 4) {
                if (request.status === 200) {

                    let data = JSON.parse(request.responseText)
                    this.setState({makeup: data})
                    
                    //console.log(this.state.makeup)

                    fullfill('Sucesso na ligação à API!')
                } else {
                    rejected(Error('Erro no request.status'));
                }
            }
            }
            request.send();
        })
    }
    
    function onFullfilled(message) {
        console.log(message);
    }
    
    function onRejected(error) {
        console.log(error);
    }
    
    promise_api(api).then(onFullfilled, onRejected);
   
}

   handlerSearch = (event) => {
       this.setState({
           pesquisa: event.target.value
       }, ()=> console.log(this.state.pesquisa))
   }

    render(){
        return (
            <div className="Makeup text-center">
                
                <input type="text" placeholder="Marca..." onChange={this.handlerSearch} value={this.state.pesquisa}/>

                <MakeupList  Listar={this.state.makeup} Search={this.state.pesquisa}/>
            </div>
        )
    }
}

export default Makeup;

