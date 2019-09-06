import React, { useState, useEffect } from 'react';
import * as Util from '../../util/util';
import M from 'materialize-css';

const SignUp = props => {
  const [username, setUsername] = useState('hello1');
  const [password, setPassword] = useState('hello1');
  const [isNewUser, setIsNewUser] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);

  //login, register with checkAuthenticateStatus as props
  const changeName = e => setUsername(e.target.value)
  const changePassword = e =>setPassword(e.target.value)

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


   //Existing User Sign up
   }else if(isExistingUser){
     return (

       <div className='container'>
            <div className='space'></div>
            <div className='space'></div>
            <div className='container'>
               <form>
                 <div className='input-field'>
                   <input className='bb' onChange={changeName} id="username" type="text" className="validate"/>
                   <label htmlFor="username">Username</label>
                 </div>
                 <div className='input-field'>
                   <input className='bb' onChange={changePassword} id="password" type="password" className="validate"/>
                   <label htmlFor="password">Password</label>
                 </div>
               </form>
             <button className="waves-effect waves-light btn round indigo lighten-3" onClick={login}type='submit'>Submit</button>
             <button className="waves-effect waves-light btn round indigo lighten-3"
                onClick={()=>{
                 setIsExistingUser(false);
                 setIsNewUser(false);}
                }>Go Back</button>
           {props.isLoggedIn?
            <button className="waves-effect waves-light btn round indigo lighten-3" onClick={logout}>Log Me outie</button>:"Youre logged out"}
          </div>

     </div>)

   //Intro
   }else{
     return(
       <div className='center-align container'>
         <div className='space'></div>
         <button className="waves-effect waves-light btn round indigo lighten-3" onClick={()=>setIsNewUser(true)}>Sign Up</button>
         <button className="waves-effect waves-light btn round indigo lighten-3" onClick={()=>setIsExistingUser(true)}>Log In</button>
       </div>
     )
   }


}
export default SignUp
// <img src={profile.profile_pic}/>
