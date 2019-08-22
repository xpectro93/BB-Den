import React,  { useState, useEffect } from 'react'
import '../../CSS/Books.css'
import axios from 'axios'

let url = 'https://www.googleapis.com/books/v1/volumes?q='
const Books = props => {
  const [user,setUser] = useState(props.profile);
  useEffect(()=> {
    setUser(props.profile)
  },[props.profile])
  useEffect(()=> {
    fetch()
  },[])
const fetch = () => {
  axios.get(url+'harry').then(resp => console.log(resp))
}
return (

  <div className="books">
  <h1>user</h1>
  <h1>User Token {user.id}</h1>
  <img src={user.profile_pic} alt='profile picture'/>
  </div>
)
}

export default Books;
//Tabs
  //My List
  //Want to read
  //Rating
