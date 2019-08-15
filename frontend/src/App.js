import React, { Component } from 'react';
import NavBar from './NavBar.js'
import { Switch, Route } from 'react-router-dom'
import './CSS/App.css';
import * as Util from './util/util'


//Components
import SignUp from './components/users/SignUp'
import Login from './components/users/Login'
import Hooks from './Hooks.js'
// const secret = require('./secret.json')

// axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&q=${query}`)

class App extends Component{
  state = {
  isLoggedIn:false,
  userId:null
  }
  handleChange = e => {
    this.setState({
      [e.target.id] : e.target.value
    })

  }
  componentDidMount(){
    this.isLoggedIn()
  }
  isLoggedIn = () => {
    // axios.get('/api/users/isLoggedIn')
    Util.isLoggedIn()
      .then(resp => {
        console.log(resp)
      })
  }
  login = () => {
  Util.login()
  }


  render(){

    return (
      <div className="App">

      <NavBar/>
          <Switch>
        <Route path='/signup' render={(props) => <SignUp {...props} {...this.state}/> } />
        <Route path='/login'  component={Login} />
        <Route path='/hooks' component={Hooks} />
          </Switch>
      </div>
    )

  }

}

export default App;
