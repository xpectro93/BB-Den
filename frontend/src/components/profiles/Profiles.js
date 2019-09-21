import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Profiles = props => {

  // const [ profile, setProfile ] = useState(null);
  const getProfile = async() => {
  try {
    let resp = await axios.get('/api/users/7')
    console.log(resp);
  }catch(err){
  console.log(err);
  }

  }
  useEffect(()=> {
    getProfile()
  },[])






return <h1>This b other peoples profiles and this is their id: {props.match.params.id}</h1>
};

export default Profiles;
