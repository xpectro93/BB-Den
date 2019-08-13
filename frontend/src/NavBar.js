import React, { Component } from 'react';

export default class NavBar extends Component {
  state = {

  }
  render(){
    return (
      <div className='NavBar'>
      <h1>Badger's Den</h1>
      <ul>
      <li>Books</li>
      <li>Todos</li>
      <li>Memes</li>
      </ul>

      </div>
    )
  }
}
