import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import './bootstrap.css'
/*
const api = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const promise_api = function (api) {
    return new Promise((fullfill, rejected) => {

        const request = new XMLHttpRequest();
        request.open('GET', api, true)
        request.onload = () => {
            if (request.status === 200) {
                console.log(JSON.parse(request.responseText))
                JSON.parse(request.responseText)
                fullfill('Sucesso na ligação à API!')
            } else {
                rejected(Error('Erro no request.status'));
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

promise_api(api).then(onFullfilled, onRejected);*/

class Makeup extends Component {
    constructor(props){
        super (props)
        this.state={
            makeup: null
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
    const api = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=colourpop`
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

    render(){

        return (
            <div className="Makeup text-center">
            
                {
                        this.state.makeup !== null  ?
                            (<div>
                                <br/>
                                {this.state.makeup.map((makeup) => (<div>
                                    <img src={makeup.api_featured_image}/>
                                    <p>Marca: {makeup.brand}</p>
                                    <p>Tipo: {makeup.product_type}</p>
                                    <p>Produto: {makeup.name}</p>
                                    <p>Preço: {makeup.price} $</p>
                                    <p>{makeup.description}</p>
                                    <p><a href={makeup.product_link}>Link do Produto</a></p>
                                </div>))}
                            </div>) :
                            (<div>
                                <p>Loading</p>
                            </div>)
                    }
            </div>
        )
    }
}

export default Makeup;

