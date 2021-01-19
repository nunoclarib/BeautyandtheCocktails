import React, { Component } from 'react'
import firebase_app from './config/firebase'
import Login from './Login'
import App from './App'

class LoginPage extends Component {
  
  constructor(props){
    super(props)
    this.state={
      user: ""
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    firebase_app.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        this.setState({user});
      } 
      else{
        this.setState({user: null});
      }

    })
  }
  
  render() {
    console.log(this.state.user)
    return (
      <div>
        {
        this.state.user !== null ? (<App/>) : (<Login/>)}
      </div>
    )
  }
}

export default LoginPage


