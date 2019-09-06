import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Profiles = props => {
  const [ profile, setProfile ] = useState(null);

  let arr = [1,100];

  let [min, max] = arr
  console.log('min',min);



  useEffect(()=> {
    console.log('it loaded');
  },[])






return <h1>This b other peoples profiles and this is their id: {props.match.params.id}</h1>
};

export default Profiles;
