import React, { useState, useEffect } from 'react';
import * as Util from '../../util/util';
import M from 'materialize-css';

const SignUp = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ pic, setPic ] = useState('');
  const [verPass , setVerPass ] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [err, setErr ] = useState('')
  //login, register with checkAuthenticateStatus as props
  const changeName = e => setUsername(e.target.value);
  const changePassword = e =>setPassword(e.target.value);
  const changeVerPass = e => setVerPass(e.target.value);

  const login = async () => {
      //returns [profile,isLoggedin, userTokenId]
      let res = await Util.login({username,password});
       props.login(res)
   }
   const logout = () => {
     //this returns w/e checkAuthenticateStatus returns
     
    Util.logout()
    props.logout([{},false,null])
   }
   const signUp = async e => {
     e.preventDefault()
     if(password === verPass){
     let resp = await Util.newUser({username:username.toLowerCase(), 
                    password_digest:password,
                    profile_pic:pic})
      props.login(resp)

     }else{
       setErr('Passwords dont match, try again') 
       setPassword('');
       setVerPass('');
     }
   }
   let intro = (
     <div className='container'>
       <ul className="collapsible">
    <li>
    <div className="collapsible-header z-depth-1"><p>What does Bluebadge have to offer? (Click to find out)</p></div>
    <div className="collapsible-body">
      <span>
      
        <ul>
          <li>MEMES!</li>
          <li>Insane Quora questions</li>
          <li>Cringy TikTok Videos</li>
          <li>Many more topics to browse, all updated frequently!</li>
          <li>A user profile you can share to show your friends your favorite memes</li>
          <li> UNDER CONSTRUCTION
            <ul>
              <li>YouTube Videos: Browse and save them to your favorites</li>
              <li>Book tracker : Keep track, add to wishlist, and rate books</li>
              <li>TODO : have a todo list to keep track of all the things you need to do</li>
            </ul>
          </li>
          <li><h1>SIGN UP ALREADY! </h1></li>
          <li><h1>Join the Bluebadger Army </h1></li>
          
        </ul>
      </span>
      </div>
    </li>
  </ul>
     </div>
   )
    
   useEffect(()=> {
     M.updateTextFields();
     let elems = document.querySelectorAll('.collapsible');
     
     // eslint-disable-next-line no-unused-vars
     let instance = M.Collapsible.init(elems);
   },[props.isLoggedIn])
   //New User Sign up
   if(isNewUser){
     return (
       <div className='container'>
            <div className='space'></div>
            <div className='space'></div>
            <div className='container'>
              {intro}
               <form onSubmit={signUp}>
                 <div className='input-field'>
                   <input  onChange={changeName} id="username" type="text" className="validate"/>
                   <label htmlFor="username">Username</label>
                 </div>
                 <div className='input-field'>
                   <input  onChange={(e)=>setPic(e.target.value)} id="profile-pic" type="text" className="validate"/>
                   <label htmlFor="profile-pic">Paste a link to a picture or gif</label>
                 </div>
                 <div className='input-field'>
                   <input  onChange={changePassword} id="password" type="password" className="validate"/>
                   <label htmlFor="password">Password</label>
                 </div>
                 <div className='input-field'>
                   <input  onChange={changeVerPass} id="verPass" type="password" className="validate"/>
                   <label htmlFor="verPass">Verify Password</label>
                 </div>
                 <button className={`col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3 ${password===verPass && password !== '' ?'pulse':''}`} type='submit'>Sign Up</button>
                 <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3"
                onClick={()=>{
                 setUsername('')
                 setPassword('')
                 setVerPass('')
                 setIsExistingUser(false);
                 setIsNewUser(false)}
                }>Go Back</button>
                <h3>{err}</h3>
               </form>
            <div className='row'>
             
           </div>
           {props.isLoggedIn?
            <button className="waves-effect waves-light btn round indigo lighten-3" onClick={logout}>Log Me outie</button>:"Youre logged out"}
          </div>

     </div>)


   //Existing User Sign up
   }else if(isExistingUser){
     return (

       <div className='container'>
            <div className='space'></div>
            <div className='space'></div>
            <div className='container'>
            {intro}
               <form>
                 <div className='input-field'>
                   <input  onChange={changeName} id="username" type="text" className="validate"/>
                   <label htmlFor="username">Username</label>
                 </div>
                 <div className='input-field'>
                   <input  onChange={changePassword} id="password" type="password" className="validate"/>
                   <label htmlFor="password">Password</label>
                 </div>
               </form>
            <div className='row'>
             <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3" onClick={login}type='submit'>Login</button>
             <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3"
                onClick={()=>{
                 setIsExistingUser(false);
                 setIsNewUser(false);}
                }>Go Back</button>
           </div>
           {props.isLoggedIn?
            <button className="waves-effect waves-light btn round indigo lighten-3" onClick={logout}>Log Me outie</button>:"Youre logged out"}
          </div>

     </div>)

   //Intro
   }else{
     return(

       <div className='center-align container'>
         <div className='space'></div>

         <div className='row'>
         {intro}
         <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3" onClick={()=>setIsNewUser(true)}>Sign Up</button>
         <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3" onClick={()=>setIsExistingUser(true)}>Log In</button>
         <div className="col s12 offset-m4 m4 offset-l4 l4">
           <div className='space'></div>
           <p id='dedication'>With much love,</p> 
           <p id='dedication'>For Ilana, who pushed me both out of my comfort zone and to better myself. While also teaching me to laugh on my worst days. </p>
           <p id='dedication'>LMAO</p>
         </div>
         </div>
       </div>
     )
   }


}
export default SignUp
