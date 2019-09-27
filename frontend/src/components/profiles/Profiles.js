
//Component not used, but kept just in case for now :/
import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Display Imports
import { DisplayMeme } from '../memes/Display/DisplayMeme.js'
import { DisplayVid } from '../memes/Display/DisplayVid.js'
import { DisplayGif } from '../memes/Display/DisplayGif.js'
import { DisplayGFY } from '../memes/Display/DisplayGFY.js'


const MemeType = url => {
  let type;
  if(url.includes('jpg')) type = 'IMG'
  else if(url.includes('png')) type = 'IMG'
  else if(url.includes('v.redd.it'))type = 'VID'
  else if(url.includes('gfycat')) type = 'GFYCAT'
  else if(url.includes('gifv')) type = 'GIFV'
  else type = null;
  return type
}
const TB = thumbUrl => {
  //[title,author]
  return thumbUrl.split('=^-^=')
}

const Profiles = props => {

  const [ profile, setProfile ] = useState({user:'Placeholder',
  profile_pic:'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
  });
  const [ meGusta, setMeGusta ] = useState('')
  const [ userContent, setUserContent ] = useState([])
  const getProfile = async() => {
  try {
    let resp = await axios.get('/api/users/username/'+ props.match.params.id)
    console.log('this is resp',resp.data.user.id)
    setProfile(resp.data.user);
    let userLikedPosts = await axios(`/api/likes/${resp.data.user.id}`)
    setUserContent(userLikedPosts.data.data)

      }catch(err){
    //  console.log(err);
      }

  }
  const getMeGusta = async () => {
    let meGusta = await axios.get('/api/likes/memes')
      setMeGusta(meGusta.data)

  }
  useEffect(()=> {
    getProfile()
  },[])




if(profile.data){
  return (<>
    <h1>This b other peoples profiles and this is their id: {props.match.params.id}</h1>

      </>)
}else{
  return <h1>lol</h1>
}


};

export default Profiles;
