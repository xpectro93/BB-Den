import React, { Component, useState, useEffect } from 'react';
import NavBar from './NavBar.js'
import { Switch, Route } from 'react-router-dom'
import './CSS/App.css';
import * as Util from './util/util'
import Auth from './util/Auth'

//Components
import SignUp from './components/users/SignUp'
import Login from './components/users/Login'
import Hooks from './Hooks.js'
import axios from 'axios'
// const secret = require('./secret.json')

// axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&q=${query}`)

class App extends Component{
state = {

}
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userId, setUserId] = useState(null);

  // useEffect(()=> {
  //   fetchIsLoggedIn()
  // },[])
async componentDidMount(){
  await this.fetchIsLoggedIn()
}
fetchIsLoggedIn = () => {
    axios.post('/api/users/login',{username:'hello1',password:'hello1'})
    // Util.isLoggedIn()
      .then(resp => {
        console.log(resp)
        // setUserId(resp.data.id)
      })
  }


// isLoggedIn={isLoggedIn}
render(){


    return (
      <div className="App">

      <NavBar/>
          <Switch>
        <Route path='/signup' render={(props) => <SignUp {...props} /> } />
        <Route path='/login'  component={Login} />
        <Route path='/hooks' component={Hooks} />
          </Switch>
      </div>
    )


}
}

export default React.memo(App);
