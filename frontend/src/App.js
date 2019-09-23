import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.js'
import { Switch, Route } from 'react-router-dom'
import './CSS/App.css';
import * as Util from './util/util'
import M from 'materialize-css'
//Components
import SignUp from './components/users/SignUp'
// import Login from './components/users/Login'
import Books from './components/books/Books'
import Memes from './components/memes/Memes'
import Todos from './components/todos/Todos'
import Den from './components/profiles/Den'
import Profiles from './components/profiles/Profiles'
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

  const logout = res => {

    //this logs out user and updates app to have[{},false,null]
    let [resp,isLogged,userId] = res;
    setUserId(userId);
    setIsLoggedIn(isLogged);
    setProfile(resp)
  }


useEffect(()=> {
  checkAuth()

    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
    var elemss = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elemss)

return ()=> {
  console.log('checauth clean up');
  }
},[props.isLoggedIn])


    return (

      <div className="App">

      <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} logout={logout}/>
      {isLoggedIn?
      <Switch>
        <Route path='/books' render={(props) => <Books {...props} profile={profile} /> } />
        <Route path='/memes/:id' render={(props) => <Memes {...props} setIsLoggedIn= {setIsLoggedIn} setUserId={setUserId} /> } />
        <Route path='/todos' render={(props) => <Todos {...props} setIsLoggedIn= {setIsLoggedIn} setUserId={setUserId} /> } />
        <Route path='/den/:id' render={(props) => <Profiles {...props} profile={profile} /> } />
        <Route path='/myden' render={(props) => <Den {...props} profile={profile} /> } />
        <Route path='/' render={(props) => <Den {...props} profile={profile} /> } />
      </Switch>
      :
      <>
      <SignUp {...props} login={login} logout={logout} isLoggedIn = {isLoggedIn} />
      <Switch>
        <Route path='/den/:id' render={(props) => <Profiles {...props} profile={profile} /> } />
      </Switch>
      </>}

      </div>
    )
}

export default App;
