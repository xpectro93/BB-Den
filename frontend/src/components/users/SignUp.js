import React, { useState } from 'react';
import * as Util from '../../util/Auth'

const SignUp = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  console.log(props)
  // state = {
  //   username:'',
  //   password:'',
  //   SignUp:false,
  //   Login:false
  // }



    return (<h1>Signup Test</h1>)

}
export default React.memo(SignUp)
