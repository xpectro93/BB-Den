import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.js'
import { Switch, Route } from 'react-router-dom'
import './CSS/App.css';
import * as Util from './util/util'

//Components
import SignUp from './components/users/SignUp'
import Login from './components/users/Login'
import Books from './components/books/Books'
import Memes from './components/memes/Memes'
import Todos from './components/todos/Todos'
// const secret = require('./secret.json')

// axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&q=${query}`)

const App = props =>{

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userId, setUserId] = useState(9);
const [profile, setProfile] = useState({});


//App has checkauth and logout
const checkAuth = async () => {

  let [isLogged, userToken] = await Util.checkAuthenticateStatus()
  let user = await Util.getAUser(userToken)
   setUserId(userToken)
   setIsLoggedIn(isLogged)
   setProfile(user.data.user)
  }

  const login = (arr) => {

    //takes in response from Util.login invoked on SignUp
    let [res,isLogged,userId] = arr
    setUserId(userId);
    setIsLoggedIn(isLogged);
    console.log(res)
    setProfile(res)
  }

  const logout = ( res ) => {

    //this just adds and updates app to have[{},false,null]
    let [resp,isLogged,userId] = res;
    setUserId(userId);
    setIsLoggedIn(isLogged);
    setProfile(resp)
  }


useEffect(()=> {
  checkAuth()
  return ()=> {
    console.log('checauth clean up');
  }
},[])


    return (

      <div className="App">

      <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} logout={logout}/>
      {isLoggedIn ?<h1>I am Logged In</h1>:<h1>Not Logged In</h1>}
      <h1> {userId}</h1>
      {isLoggedIn?

        <Switch>
      <Route path='/books' render={(props) => <Books {...props} profile={profile} /> } />
      <Route path='/memes' render={(props) => <Memes {...props} setIsLoggedIn= {setIsLoggedIn} setUserId={setUserId} /> } />
      <Route path='/todos' render={(props) => <Todos {...props} setIsLoggedIn= {setIsLoggedIn} setUserId={setUserId} /> } />
      </Switch>
      :
      <>
      <SignUp {...props} login={login} logout={logout} isLoggedIn = {isLoggedIn} />
      </>}

      </div>
    )
}

export default App;
