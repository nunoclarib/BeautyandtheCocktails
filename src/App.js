import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {signIn} from './actions'
import {signOut} from './actions'

function App() {

  const isLogged = useSelector (state => state)
  
  const dispatch = useDispatch()

  console.log(isLogged)  
    return (
      <div className="text-center">

        {/* Experimentar dispatch das actions 
        <button onClick={()=> dispatch(signIn())}>Login</button>
        <button onClick={()=> dispatch(signOut())}>Logout</button> */}
        
        <h1>Home</h1>
        {isLogged ? <h3>Estás loggado, bem-vindo!</h3> : <h3>Não estás loggado</h3>}     
      </div>
    )
}

export default App


