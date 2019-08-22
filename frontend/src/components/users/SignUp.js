import React, { useState } from 'react';
import * as Util from '../../util/util'

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

    return (<>
          <form>
          user:{username}
          <br/>
          <input onChange={changeName}/>

          <br/>
          Pass:{password}
          <br/>
          <input type='password' onChange={changePassword}/>
          </form>
          <button onClick={login}type='submit'>Submit</button>
          {props.isLoggedIn?<button onClick={logout}>Log Me outie</button>:"Youre logged out"}

          </>)

}
export default SignUp
// <img src={profile.profile_pic}/>
