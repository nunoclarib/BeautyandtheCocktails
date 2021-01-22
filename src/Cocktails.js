import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import './bootstrap.css'
import CocktailsList from './CocktailsList'

import firebase_app from "./config/firebase"
import {Button} from "react-bootstrap"

class Cocktails extends Component {
    constructor(props){
        super (props)
        this.state={
            cocktails: "",
            pesquisa: ""
        }         
    }
   
    componentDidMount(){
    window.scrollTo(0, 0)
    
    const api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.props.location.state.produto_api}` 
    
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    
    const promise_api = (api) => {
        return new Promise((fullfill, rejected) => {
    
            const request = new XMLHttpRequest();
            request.open('GET', api, true)
            request.onload = () => {
                if (request.readyState === 4) {
                if (request.status === 200) {

                    let data = JSON.parse(request.responseText)
                    this.setState({cocktails: data.drinks})
                    
                    console.log(this.state.cocktails)

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

   scrollDown = () =>{
    window.scrollTo(0, 680)
  }

    render(){
       console.log(this.state.cocktails)
        return (
            <div>

<section>
      <div class="hero-wrap ">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
          <div class="col-md-6  text-center" data-scrollax=" properties: { translateY: '70%' }">
            <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><Link to="/">Home</Link></span></p>
            <h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">{this.props.location.state.produto}</h1>
            <p
                  class="mb-3 "
                  data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                >
                 {this.props.location.state.description}
                </p>


          <input className="btn btn-primary btn-outline-white px-5 py-3 mt-5" type="text" placeholder="Nome..." onChange={this.handlerSearch} value={this.state.pesquisa}/>
        
          <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" onClick={() => this.scrollDown()} className="text-center pt-5">
                <a
                  className="dotarrow"
                >
                  <i class="arrow down"></i>
                </a>
              </p>

         </div>



         
        </div>
      </div>
    </div>
</section>  
           
    <section className=" bg-light" style={{marginTop: '800px'}}>
    <div className="container">
    <CocktailsList Cocktails={this.state.cocktails} Pesquisa={this.state.pesquisa}/>
    </div>
    </section>    

</div>
        )
    }
}

export default Cocktails;

