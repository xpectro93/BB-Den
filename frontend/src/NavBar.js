import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {

    return (
      <div className='NavBar'>
      <h1><NavLink to="/">Logo</NavLink></h1>
      <ul>
      <li><NavLink to="/books">Books</NavLink></li>
      <li><NavLink to="/todos">To-Do</NavLink></li>
      <li><NavLink to="/memes">Memes</NavLink></li>
      </ul>

      </div>
    )
}
export default NavBar
