import React, { Component } from 'react';
import NavBar from './NavBar.js'
import { Switch, Route } from 'react-router-dom'
import './CSS/App.css';
import * as Util from './util/util'


//Components
import SignUp from './components/users/SignUp'
import Login from './components/users/Login'
// const secret = require('./secret.json')

// axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&q=${query}`)

class App extends Component{
  state = {
  test:''
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

  }


  render(){
    const { test } = this.state;
    return (
      <div className="App">

      <NavBar/>
      <h1>{test}</h1>
      <input id="test" onChange={this.handleChange}/>
          <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/login'  component={Login} />
          </Switch>
      </div>
    )

  }

}

export default App;
