import React,{ useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as Util from './util/util';
import logo from './assets/bbb2.png';
import M from 'materialize-css'
import './CSS/NavBar.css'

import memepic from './assets/cat.png'
import tiktok from './assets/tiktok.png'
import quora from './assets/quora.png'


const NavBar = props => {
  const logout =() => {
    //this returns w/e checkAuthenticateStatus returns
    localStorage.removeItem("token")
    Util.logout()
     props.logout([{},false,null])
  }
  useEffect(() => {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
    let collap = document.querySelectorAll('.collapsible');
    // eslint-disable-next-line no-unused-vars
    let instaCollap = M.Collapsible.init(collap);
    let item = document.querySelectorAll('.dropdown-trigger');
    // eslint-disable-next-line no-unused-vars
    let instances = M.Dropdown.init(item);


  }, [props.isLoggedIn])

    return (

      <div className='NavBar'>
      {props.isLoggedIn ?
        <div>
          {/* {Dropdown content/} */}
          <ul id="dropdown1" className="dropdown-content">
            <li><Link to='/memes/dankmemes'><img  className='nav-icon round' src={memepic} alt='topic pic'/>Dank Memes</Link></li>
            <li className="divider"></li>
            <li><Link to='/memes/insanepeoplequora'><img  className='nav-icon round' src={quora} alt='topic pic'/>Quora Madness</Link></li>
            <li className="divider"></li>
            <li><Link to='/memes/tiktokcringe'><img  className='nav-icon round' src={tiktok} alt='topic pic'/>TikTok Cringe</Link></li>
          </ul>

        <div className='navbar-fixed'>
        <nav>

          <div className="nav-wrapper container">
            <a href="/myden" className="brand-logo"><img src={logo}alt='Logo'/></a>
            {/* {SideNav trigger} */}
            <span><Link to='#' data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link></span>
            {/* {SideNav Content} */}
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/myden">My Den</NavLink></li> 
              <li><a href="/#" className="dropdown-trigger"  data-target="dropdown1">Meme Type<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><NavLink to="/books">Books</NavLink></li>
              <li><NavLink to="/todos">To-Do</NavLink></li>
              <button  className='waves-effect waves-light btn round' onClick={logout}>Log me Outie</button>
            </ul>
          </div>
        </nav>


</div>
  <div>

  <ul id="mobile-demo" className="sidenav">
       <li className="sidenav-close" ><NavLink to='/'>Home</NavLink></li>
       <li className="sidenav-close" ><NavLink to='/myden'>My Den</NavLink></li>
       <li className="sidenav-close" ><NavLink to='/books'>BOOKS</NavLink></li>
       <li className="sidenav-close" ><NavLink to='/todos'>TO-DO</NavLink></li>
       <li className="no-padding">
         <ul className="collapsible collapsible-accordion">
           <li>
             <button className="color-test collapsible-header">CHOOSE MEME TOPIC<i className="medium material-icons">arrow_drop_down</i></button>
             <div className="collapsible-body">
               <ul className='icons'>
                 <li className="sidenav-close"><NavLink to='/memes/dankmemes'><img  src={memepic} alt='topic pic'/>Memes</NavLink></li>
                 <li className="sidenav-close"><NavLink to='/memes/insanepeoplequora'><img  src={quora} alt='topic pic'/>Quora Madness</NavLink></li>
                 <li className="sidenav-close"><NavLink to='/memes/tiktokcringe'><img  src={tiktok} alt='topic pic'/>Tik Tok Cringe</NavLink></li>
                 
               </ul>
             </div>
           </li>
         </ul>
       </li>
       
       <li className="sidenav-close color-red" onClick={logout}><NavLink to='/'><i className="material-icons">exit_to_app</i>Log Me Outie</NavLink></li>

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
