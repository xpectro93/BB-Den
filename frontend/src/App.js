import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.js'
import { Switch, Route, Redirect } from 'react-router-dom'
import './CSS/App.css';
import * as Util from './util/util'

//Components
import SignUp from './components/users/SignUp'
import Login from './components/users/Login'
import Books from './components/books/Books'
import Memes from './components/memes/Memes'
import Todos from './components/todos/Todos'

import Hooks from './Hooks.js'
// const secret = require('./secret.json')

// axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&q=${query}`)

// const userAuth = () => {
//
//
// }


const App = props =>{

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userId, setUserId] = useState(9);
const [profile, setProfile] = useState({});


//App has checkauth and logout
const checkAuth = async () => {

let [isLogged, userToken] = await Util.checkAuthenticateStatus()

 setUserId(userToken)
 setIsLoggedIn(isLogged)
}

const login = (arr) => {

  let [res,isLogged,userId] = arr
  setUserId(userId);
  setIsLoggedIn(isLogged);
  console.log('res',res)
  setProfile(res)
}

const logout = ( res ) => {
  let [resp,isLogged,userId] = res;
  setUserId(userId);
  setIsLoggedIn(isLogged);
  setProfile(resp)
}


useEffect(()=> {
  checkAuth()
},[])
useEffect(()=> {
},[isLoggedIn,userId])

console.log(profile)



    return (

      <div className="App">

      <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      {isLoggedIn ?<h1>I am Logged In</h1>:<h1>Not Logged In</h1>}

      <h1> {userId}</h1>
          <Switch>
        <Route path='/signup' render={(props) => <SignUp {...props} login={login} logout={logout} isLoggedIn = {isLoggedIn} setIsLoggedIn= {setIsLoggedIn} setUserId={setUserId} /> } />
        <Route path='/login'  component={Login} />
        <Route path='/hooks' component={Hooks} />
        <Route path='/books' render={(props) => <Books {...props} setIsLoggedIn= {setIsLoggedIn} setUserId={setUserId} /> } />
        <Route path='/memes' render={(props) => <Memes {...props} setIsLoggedIn= {setIsLoggedIn} setUserId={setUserId} /> } />
        <Route path='/todos' render={(props) => <Todos {...props} setIsLoggedIn= {setIsLoggedIn} setUserId={setUserId} /> } />
          </Switch>
      </div>
    )
}

export default App;
