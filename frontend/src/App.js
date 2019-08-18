import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.js'
import { Switch, Route } from 'react-router-dom'
import './CSS/App.css';
import * as Util from './util/util'
import Auth from './util/Auth'

//Components
import SignUp from './components/users/SignUp'
import Login from './components/users/Login'
import Hooks from './Hooks.js'
// const secret = require('./secret.json')

// axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&q=${query}`)

// const userAuth = () => {
//
//
// }

const App = props =>{

// isLoggedIn={isLoggedIn}

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userId, setUserId] = useState(9);

const checkAuth = async () => {
let [isLogged, userToken ] = await Util.checkAuthenticateStatus()

setUserId(userToken)
setIsLoggedIn(isLogged)
}
useEffect(()=> {
  checkAuth()
},[])


    return (
      <div className="App">

      <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={userId} />
      {isLoggedIn ? <h1>Logged In</h1>: <h1>Not Logged in</h1>}
    <h1> {userId}</h1>
          <Switch>
        <Route path='/signup' render={(props) => <SignUp {...props} setIsLoggedIn= {setIsLoggedIn} setUserId={setUserId} /> } />
        <Route path='/login'  component={Login} />
        <Route path='/hooks' component={Hooks} />
          </Switch>
      </div>
    )


}

export default App;
