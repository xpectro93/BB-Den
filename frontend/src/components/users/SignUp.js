import React, { useState, useEffect } from 'react';
import * as Util from '../../util/util';
import M from 'materialize-css';

const SignUp = props => {
  const [username, setUsername] = useState('hello1');
  const [password, setPassword] = useState('hello1');
  const [verPass , setVerPass ] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);

  //login, register with checkAuthenticateStatus as props
  const changeName = e => setUsername(e.target.value);
  const changePassword = e =>setPassword(e.target.value);
  const changeVerPass = e => setVerPass(e.target.value);

  const createBadger = () => {

  }

  const login = async () => {
      //returns [profile,isLoggedin, userTokenId]
      let res = await Util.login({username,password});
       props.login(res)
   }
   const logout = () => {
     //this returns w/e checkAuthenticateStatus returns
     //AWAIT Canceled here due to memory leak
    Util.logout()
    props.logout([{},false,null])
   }

   useEffect(()=> {
     M.updateTextFields();
   },[])
   //New User Sign up
   if(isNewUser){
     console.log('jere');
     return (
       <div className='container'>
            <div className='space'></div>
            <div className='space'></div>
            <div className='container'>
               <form onSubmit={createBadger}>
                 <div className='input-field'>
                   <input  onChange={changeName} id="username" type="text" className="validate"/>
                   <label htmlFor="username">Username</label>
                 </div>
                 <div className='input-field'>
                   <input  onChange={changePassword} id="password" type="password" className="validate"/>
                   <label htmlFor="password">Password</label>
                 </div>
                 <div className='input-field'>
                   <input  onChange={changeVerPass} id="verPass" type="password" className="validate"/>
                   <label htmlFor="verPass">Verify Password</label>
                 </div>
               </form>
            <div className='row'>
             <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3"type='submit'>Sign Up</button>
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


   //Existing User Sign up
   }else if(isExistingUser){
     return (

       <div className='container'>
            <div className='space'></div>
            <div className='space'></div>
            <div className='container'>
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
             <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3" onClick={login}type='submit'>Submit</button>
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
         <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3" onClick={()=>setIsNewUser(true)}>Sign Up</button>
         <button className="col s4 offset-s1 waves-effect waves-light btn round indigo lighten-3" onClick={()=>setIsExistingUser(true)}>Log In</button>
         </div>
       </div>
     )
   }


}
export default SignUp
