import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Util from './util/util';
import './bb-pixilart.png';

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
        <nav>
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/books">Books</NavLink></li>
              <li><NavLink to="/todos">To-Do</NavLink></li>
             <li><NavLink to="/memes">Memes</NavLink></li>
             <button onClick={logout}>Log me Outie</button>
            </ul>
          </div>
        </nav>

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

// <nav>
//   <div className="nav-wrapper">
//     <a href="#" class="brand-logo">Logo</a>
//     <ul id="nav-mobile" class="right hide-on-med-and-down">
//       <li><a href="sass.html">Sass</a></li>
//       <li><a href="badges.html">Components</a></li>
//       <li><a href="collapsible.html">JavaScript</a></li>
//     </ul>
//   </div>
// </nav>


// <h1><NavLink to="/">Logo</NavLink></h1>
//   <ul>
//     <li><NavLink to="/books">Books</NavLink></li>
//     <li><NavLink to="/todos">To-Do</NavLink></li>
//     <li><NavLink to="/memes">Memes</NavLink></li>
//     <button onClick={logout}>Log me Outie</button>
//   </ul>
