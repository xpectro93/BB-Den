import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Den = props => {
  const [ profile, setProfile ] = useState(null)

  const loadMyProfile = async() => {
    try{
      let myProfile = await axios.get(`/api/users/${localStorage.getItem("token")}`)
      setProfile(myProfile.data.user);
    }catch(err){
      console.log(err);
    }
 
  }
  useEffect(()=> {
  loadMyProfile()
  },[])
  if(profile){
    return <h1>Hi my name is {profile.username}</h1>
  }else{
    return <h1>You're not logged in...how did you get here... 0.0</h1>
  }
  
};

export default Den;
