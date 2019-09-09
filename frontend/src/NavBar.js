import React,{ useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as Util from './util/util';
import logo from './assets/bbb2.png';
import M from 'materialize-css'
import './CSS/NavBar.css'

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
        <div className='navbar-fixed'>
        <nav>

          <div className="nav-wrapper container">
            <a href="/myden" className="brand-logo"><img src={logo}alt='Logo'/></a>

            <span><Link to='#' data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link></span>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/myden">My Badger Den</NavLink></li>
              <li><NavLink to="/memes">Memes</NavLink></li>
              <li><NavLink to="/books">Books</NavLink></li>
              <li><NavLink to="/todos">To-Do</NavLink></li>

              <button  className='waves-effect waves-light btn round' onClick={logout}>Log me Outie</button>
            </ul>
          </div>

        </nav>


</div>
  <div>
    <ul className="sidenav" id="mobile-demo">
      <li className="sidenav-close" ><NavLink to='/myden'>My Badger Den</NavLink></li>
      <li className="sidenav-close" ><NavLink to='/memes'>Memes</NavLink></li>
      <li className="sidenav-close" ><NavLink to='/books'>books</NavLink></li>
      <li className="sidenav-close" ><NavLink to='/todos'>To-Do</NavLink></li>
    </ul>
  </div>
        </div>
        :
        <>
            <nav>
              <div className="nav-wrapper container">
                <a href="/" className="brand-logo"><img src={logo} alt='logo'/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                 <button className='waves-effect waves-light btn round' onClick={logout}><NavLink to="/signup">Sign-Up / Log In</NavLink></button>
                </ul>
              </div>
            </nav>
      </>
        }

      </div>

    )
}
export default NavBar
