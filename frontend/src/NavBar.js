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
    Util.logout()
     props.logout([{},false,null])
  }
  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
    var elemss = document.querySelectorAll('.collapsible');
    var instancess = M.Collapsible.init(elemss);

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
              <li><NavLink to="/myden">My Badger</NavLink></li>
              <li><NavLink to="/memes/dankmemes">Memes</NavLink></li>
              <li><NavLink to="/books">Books</NavLink></li>
              <li><NavLink to="/todos">To-Do</NavLink></li>
              <button  className='waves-effect waves-light btn round' onClick={logout}>Log me Outie</button>
            </ul>
          </div>

        </nav>


</div>
  <div>

  <ul id="mobile-demo" className="sidenav">
       <li className="sidenav-close" ><NavLink to='/myden'>MY DEN</NavLink></li>
       <li className="sidenav-close" ><NavLink to='/books'>BOOKS</NavLink></li>
       <li className="sidenav-close" ><NavLink to='/todos'>TO-DO</NavLink></li>
       <li className="no-padding">
         <ul className="collapsible collapsible-accordion">
           <li>
             <a className="color-test collapsible-header">CHOOSE MEME TOPIC<i className="medium material-icons">arrow_drop_down</i></a>
             <div className="collapsible-body">
               <ul className='icons'>
                 <li className="sidenav-close"><NavLink to='/dankmemes'><img  src={memepic} alt='topic pic'/>Memes</NavLink></li>
                 <li className="sidenav-close"><NavLink to='/tiktok'><img  src={tiktok} alt='topic pic'/>Tik Tok Cringe</NavLink></li>
                 <li className="sidenav-close"><NavLink to='/quora'><img  src={quora} alt='topic pic'/>Quora Madness</NavLink></li>

               </ul>
             </div>
           </li>
         </ul>
       </li>


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

// <li className="no-padding">
//   <ul className="collapsible collapsible-accordion">
//     <li>
//       <a className="collapsible-header">Dropdown<i class="material-icons">arrow_drop_down</i></a>
//       <div classNames="collapsible-body">
//         <ul>
//           <li><a href="#!">First</a></li>
//           <li><a href="#!">Second</a></li>
//           <li><a href="#!">Third</a></li>
//           <li><a href="#!">Fourth</a></li>
//         </ul>
//       </div>
//     </li>
//   </ul>
// </li>


// <ul className="sidenav" id="mobile-demo">
//
//   <li className="sidenav-close" ><NavLink to='/myden'>My Badger Den</NavLink></li>
//   <li className="sidenav-close" ><NavLink to='/memes'>Memes</NavLink></li>
//   <li className="sidenav-close" ><NavLink to='/books'>books</NavLink></li>
//   <li className="sidenav-close" ><NavLink to='/todos'>To-Do</NavLink></li>
// </ul>
