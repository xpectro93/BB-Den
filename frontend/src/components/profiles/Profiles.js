import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Profiles = props => {

  const [ profile, setProfile ] = useState({user:'Placeholder',
  profile_pic:'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
  });
  const [ userContent, setUserContent ] = useState([])
  const getProfile = async() => {
  try {
    let resp = await axios.get('/api/users/username/'+props.match.params.id)
     setProfile(resp);
      }catch(err){
     console.log(err);
      }

  }
  useEffect(()=> {
    getProfile()
  },[])




if(profile.data){
  return (<>
    <h1>This b other peoples profiles and this is their id: {props.match.params.id}</h1>
    <img src={profile.data.user.profile_pic} alt='test' />

      </>)
}else{
  return <h1>lol</h1>
}


};

export default Profiles;
