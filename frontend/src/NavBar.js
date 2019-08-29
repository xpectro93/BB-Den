import React,{ useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as Util from './util/util';
import logo from './bb-pixilart.png';
import M from 'materialize-css'

const NavBar = props => {
  const logout =() => {
    //this returns w/e checkAuthenticateStatus returns
    Util.logout()
     props.logout([{},false,null])
  }

  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }, [props.isLoggedIn])

    return (

      <div className='NavBar'>
      {props.isLoggedIn ?
        <div>
        <nav>
          <div className="nav-wrapper container">
            <a href="/books" className="brand-logo"><img src={logo}alt='Logo'/></a>
            <span><Link to='#' data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link></span>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/books">Books</NavLink></li>
              <li><NavLink to="/todos">To-Do</NavLink></li>
              <li><NavLink to="/memes">Memes</NavLink></li>
              <button onClick={logout}>Log me Outie</button>
            </ul>

          </div>

        </nav>

        <div>
        <ul className="sidenav" id="mobile-demo">
          <li className="sidenav-close" ><NavLink to='/memes'>Memes</NavLink></li>
          <li className="sidenav-close" ><NavLink to='/books'>books</NavLink></li>
          <li className="sidenav-close" ><NavLink to='/todos'>todos</NavLink></li>
        </ul>
        </div>


        </div>
        :<>
            <nav>
              <div className="nav-wrapper container">
                <a href="/" className="brand-logo"><img src={logo} alt='logo'/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                 <button onClick={logout}><NavLink to="/signup">Sign-Up / Log In</NavLink></button>
                </ul>
              </div>
            </nav>
          </>}

      </div>

    )
}
export default NavBar

// <ul id="slide-out" class="sidenav show-on-medium-and-down">
// <li>
//   <div class="user-view">
//     <div class="background">
//       <img src="images/office.jpg"/>
//   </div>
//       <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
//       <a href="#name"><span class="white-text name">John Doe</span></a>
//       <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
// </div>
// </li>
// <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
// <li><a href="#!">Second Link</a></li>
// <li><div class="divider"></div></li>
// <li><a class="subheader">Subheader</a></li>
// <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
// </ul>
