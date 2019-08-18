import React, { useState, useEffect } from 'react';
import * as Util from '../../util/util'

const SignUp = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [profile, setProfile] = useState({})

  // useEffect(()=> {
  //   // login();
  // },[])
  useEffect(() => {
    props.setUserId(profile.id)
  },[profile.id])

  const changeName = e => setUsername(e.target.value)
  const changePassword = e =>setPassword(e.target.value)
  const login = async () => {
    let res =  await Util.login({username,password})
    let [userInfo, isUserAuthenticated, userIdToken ] = res
    props.setIsLoggedIn(isUserAuthenticated)
    setProfile(userInfo)
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
          <img src={profile.profile_pic}/>
          <h1>{props.userId}</h1>
          </>)

}
export default SignUp
