import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const Den = props => {
  const [ profile, setProfile ] = useState(null)
  const [ myLikedPosts, setMyLikedPosts ] = useState([])
  const [ meGusta, setMeGusta ] = useState([])

  const loadMyProfile = async() => {

    try{
      let { me } = props;
      if(me){
        let myProfile = await axios.get(`/api/users/${localStorage.getItem("token")}`)
        setProfile(myProfile.data.user)
        let meLikes = await axios.get(`/api/likes/${localStorage.getItem("token")}`)
         setMyLikedPosts(meLikes.data.data)
      }else{
        let resp = await axios.get('/api/users/username/'+ props.match.params.id)
        setProfile(resp.data.user)
        let meLikes = await axios.get(`/api/likes/${resp.data.user.id}`)
        setMyLikedPosts(meLikes.data.data)
      }

      
    }catch(err){
      console.log(err);
    }
  }

  const getMeGusta = async () => {
    let meGusta = await axios.get(`/api/likes/${localStorage.getItem('token')}`)
      setMeGusta(meGusta.data)

  }
  useEffect(()=> {
  getMeGusta()
  loadMyProfile()
  },[])
  useEffect(()=> {
  loadMyProfile()
  },[meGusta,props.match.params])

   let displayMyLikes = myLikedPosts.map((post, i) => {
    let meme = {
      url:post.likeurl,
      title:TB(post.thumbnail)[0],
      author:TB(post.thumbnail)[1]
    }
    if(MemeType(post.likeurl) === "IMG"){
      return (<DisplayMeme key={i} i={i} meme={meme} getMeGusta={getMeGusta} likes={meGusta}/>)
    }else if(MemeType(post.likeurl) === "VID"){
      return (<DisplayVid key={i} i={i} meme={meme} getMeGusta={getMeGusta} likes={meGusta}/>)
    }else if(MemeType(post.likeurl)=== "GFYCAT"){
       return (<DisplayGFY key={i} i={i} meme={meme} getMeGusta={getMeGusta} likes={meGusta}/>)
    }else if(MemeType(post.likeurl)=== "GIFV"){
      return (<DisplayGif key={i} i={i} meme={meme} getMeGusta={getMeGusta} likes={meGusta}/>)
    }else{
      return (<span key={i}></span>)
    }
   })

  if(profile){
    return (<>
            <div className="row container align-center">
            
            <div className="align-center col s12 offset-m1 m4  offset-l1 l4">
              <img className="prof responsive-img round" src={profile.profile_pic} alt='leMe'/>
            </div>
            <div className="col s12 offset-m1 m5  offset-l1 l5">
              <h3>Hi, my name is {profile.username} and this is my meme stash.. you can look..but no touching. </h3>
            </div>

            
            </div>
            
            <div className='row'>
            {displayMyLikes}
            </div>
            
            </>)
  }else{
    return <h1>You're not logged in...how did you get here... 0.0</h1>
  }
  
};

export default Den;
