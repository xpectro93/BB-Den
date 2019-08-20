import React, { useState, useEffect } from 'react';
import * as Util from '../../util/util'

const SignUp = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

//login, register with checkAuthenticateStatus as props
  const changeName = e => setUsername(e.target.value)
  const changePassword = e =>setPassword(e.target.value)

const login = async () => {
    //returns [profile,isLoggedin, userTokenId]
    let res = await Util.login({username,password});

     props.login(res)
     setUsername('');
     setPassword('')
 }
 const logout = async () => {
   //this returns w/e checkAuthenticateStatus returns
    let res = await (Util.logout());
    props.logout(res)
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
          <button onClick={logout}>Log Me outie</button>

          </>)

}
export default SignUp
// <img src={profile.profile_pic}/>
