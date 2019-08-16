import React, { useState } from 'react';
import * as Util from '../../util/util'
import axios from 'axios'

const SignUp = props => {
  const [username, setUsername] = useState('hello')
  const [password, setPassword] = useState('hello')
  // state = {
  //   username:'',
  //   password:'',
  //   SignUp:false,
  //   Login:false
  // }
  const changeName = e => setUsername(e.target.value)
  const changePassword = e =>setPassword(e.target.value)
  const login = e =>{
    e.preventDefault();
   // Util.login({username,password})
   console.log('it gets here at least')
   axios.post('/api/users/login',{username:'hello',password:'hello'})
   .then(res => {
     console.log('this is res',res)
     // Auth.authenticateUser(res.data.id);
   })

 }
   // console.log(username,password)


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
