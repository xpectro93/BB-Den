import React, { Component } from 'react';
import NavBar from './NavBar.js'
import { Switch, Route } from 'react-router-dom'
import './CSS/App.css';
const secret = require('./secret.json')

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


  render(){
    const { test } = this.state;
    return (
      <>

      <NavBar/>
      <h1>{test}</h1>
      <input id="test" onChange={this.handleChange}/>
          <Switch>

          </Switch>
      </>
    )

  }

}

export default App;
