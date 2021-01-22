import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

//import { Button } from "react-bootstrap";

import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";

import { signOut } from "./actions";

import firebase_app from "./config/firebase"

import foto from './imgs/logo.png'

const Menu = () => {

        const isLogged = useSelector (state => state)
        const dispatch = useDispatch();

        const logoutUser = () => {
            firebase_app.auth().signOut().then(function() {
                console.log('logged out!')
                dispatch(signOut())
              }).catch(function(error) {
                console.log('! ERROR !')
              });
        }
        console.log(isLogged)
        return (
            
         <div className="Menu">

         <nav class="navbar navbar-expand-lg navbar-light ftco_navbar ftco-navbar-light" id="ftco-navbar">
                     <div class="container">
                       <Link className="barra" to="/"><img src={foto} alt='ola' width='50px'/>Beauty and the Cocktails</Link>
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="oi oi-menu"></span> Menu
                       </button>
                 
                       <div class="collapse navbar-collapse" id="ftco-nav">
                         <ul class="navbar-nav ml-auto">
                     
                         <li className="nav-item"><Link to="/MakeUp" className="nav-link"> Make-Up </Link> </li>
                         <li className="nav-item mr-3"><Link to="/Cocktails" className="nav-link"> Cocktails </Link></li>
                         <li className="nav-item mr-3"><Link to="/Sobre" className="nav-link"> Sobre nós </Link></li>


                         {isLogged === false ? (
                <li className="nav-item cta">
                <Link to="/login" className="nav-link"><span>Login</span></Link>
            </li>) 
            : (<li className="nav-item dropdown cta ">
                             <a className="nav-link dropdown-toggle" href="portfolio.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Logout</a>
                               <div className="dropdown-menu" aria-labelledby="dropdown04">
                               <Link to="/login" className="nav-link ctared" onClick={logoutUser}><span>Terminar Sessão</span></Link>
                               </div>
                            </li>)}               
                       {/*  <li class="nav-item dropdown">
                             <a class="nav-link dropdown-toggle" href="portfolio.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</a>
                               <div class="dropdown-menu" aria-labelledby="dropdown04">
                                 <a class="dropdown-item" href="portfolio.html">Portfolio</a>
                                 <a class="dropdown-item" href="portfolio-single.html">Portfolio Single</a>
                               </div>
                            </li>
                        */}
                         </ul>
                       </div>
                     </div>
                   </nav>
                 </div>
        
        
        )
        }
    export default Menu;