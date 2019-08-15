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

const App = props =>{

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(()=> {
    fetchIsLoggedIn()
  },[])

  const fetchIsLoggedIn = () => {
    // axios.get('/api/users/isLoggedIn')
    Util.isLoggedIn()
      .then(resp => {
        setUserId(resp.data.id)
      })
  }




    return (
      <div className="App">

      <NavBar/>
          <Switch>
        <Route path='/signup' render={(props) => <SignUp {...props} isLoggedIn={isLoggedIn}/> } />
        <Route path='/login'  component={Login} />
        <Route path='/hooks' component={Hooks} />
          </Switch>
      </div>
    )



}

export default React.memo(App);
