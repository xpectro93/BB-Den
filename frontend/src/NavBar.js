import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Util from './util/util'

const NavBar = props => {
  const logout =() => {
    //this returns w/e checkAuthenticateStatus returns
    Util.logout()
     props.logout([{},false,null])
  }

    return (

      <div className='NavBar'>
      {props.isLoggedIn ?
        <>
        <h1><NavLink to="/">Logo</NavLink></h1>
          <ul>
            <li><NavLink to="/books">Books</NavLink></li>
            <li><NavLink to="/todos">To-Do</NavLink></li>
            <li><NavLink to="/memes">Memes</NavLink></li>
            <button onClick={logout}>Log me Outie</button>
          </ul>
        </>
        :<>
        <h1><NavLink to="/">Logo</NavLink></h1>
            <ul>
              <li><NavLink to="/signup">Sign-Up / Log In</NavLink></li>
            </ul>
          </>}

      </div>

    )
}
export default NavBar
