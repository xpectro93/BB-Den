import React, { useState, useEffect } from 'react';
import * as Util from '../../util/util'
import axios from 'axios'

const SignUp = props => {
  const [username, setUsername] = useState('hello1')
  const [password, setPassword] = useState('hello1')
  // state = {
  //   username:'',
  //   password:'',
  //   SignUp:false,
  //   Login:false
  // }
  useEffect(()=> {
    login()
  },[])

  const changeName = e => setUsername(e.target.value)
  const changePassword = e =>setPassword(e.target.value)
  const login = async ()=>{
  let res =  await Util.login({username,password})
  console.log(res)
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
          </>)

}
export default React.memo(SignUp)
