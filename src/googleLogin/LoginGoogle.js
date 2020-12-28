// Não está a ser usado!
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

import bootstrap from './bootstrap.css'

class AppGLoggin extends Component {

  constructor(props){
    super(props)
    this.state = {
      perfil: null,
      button: "Login"
    }
  }

  responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
    let user = response.profileObj
    
    this.setState({
      perfil: user,
      button: "Logged"
    })

  }

  render() {

    return (
      <div className="text-center">
        <GoogleLogin
        clientId="890519753504-hsakfi3euttggkn9m0sun0g8t1a4bn7s.apps.googleusercontent.com"
        buttonText={this.state.button}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
      {  this.state.perfil !== null  ?
                            (<div>
                                <br/>
                                <img src={this.state.perfil.imageUrl}/>
                                <p>{this.state.perfil.name}</p>
                                <p>{this.state.perfil.email}</p>
                            </div>) :
                            (<div>
                                <p></p>
                            </div>) }
      </div>
    )
  }
}
export default AppGLoggin