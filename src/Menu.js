import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import { Button } from "react-bootstrap";

import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";

import { signOut } from "./actions";

import firebase_app from "./config/firebase"

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

        return (<div>
            <div className="Menu">
            <ul className="nav nav-tabs">
                <li className="nav-item"><Link to="/" className="nav-link"> Home </Link> </li>
                <li className="nav-item"><Link to="/makeup" className="nav-link"> Make-Up </Link> </li>
                <li className="nav-item"><Link to="/cocktails" className="nav-link"> Cocktails </Link></li>

            {isLogged === false ? (
                <li className="nav-item">
                <Link to="/login" className="nav-link"><Button className="text-right white">Login</Button></Link>
            </li>) 
            : (<li className="nav-item">
                <Link to="/login" className="nav-link" ><Button className="text-right white btn-danger" onClick={logoutUser}>Logout</Button></Link>
                </li>)}
            </ul>
            </div>
        </div> )
        }
    export default Menu;