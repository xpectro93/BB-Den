/* eslint-disable array-callback-return */
import React from 'react'
// import LikeMeme from './LikeMeme.js'
import { DisplayMeme } from './Display/DisplayMeme'
import { DisplayVid } from './Display/DisplayVid'
import { DisplayGif } from './Display/DisplayGif'
import { DisplayGFY } from './Display/DisplayGFY'
import '../../CSS/Meme.css'

export const Displays = {
        DisplayMeme,
        DisplayVid,
        DisplayGif,
        DisplayGFY    }

const MemeType = url => {
  let type;
  if(url.includes('jpg')) type = 'IMG'
  else if(url.includes('gifv')) type = 'GIFV'
  else if(url.includes('gif')) type = 'IMG'
  else if(url.includes('png')) type = 'IMG'
  else if(url.includes('v.redd.it'))type = 'VID'
  else if(url.includes('gfycat')) type = 'GFYCAT'
  
  else type = null;
  return type
}
const MemeMap =({memes, firstLoad, likes, getMeGusta}) => {

  
  

  let memeList = memes.map((meme,i) => {
    
    let url = meme.data.url;
    
    if(firstLoad && i === 0){
      return(
        <div className='container warning' key={i}>
          <h1 className='flow-text' >Some Memes might be too spicy</h1>
          <h1 className='flow-text' >Proceed at your own risk</h1>
          <img className="circle responsive-img" src='https://steamuserimages-a.akamaihd.net/ugc/360653586050510880/2F485F41314D6EC9AA611689E9DC3BAA2573D5E0/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' alt='dank meme'/>
        </div>
      )
    }else if(meme && meme.data){
      if(MemeType(url) === "IMG"){
        let memeData = {
          url: meme.data.url,
          title : meme.data.title,
          author : meme.data.author}

        return (<DisplayMeme key={i} i={i} meme={memeData} getMeGusta={getMeGusta} likes={likes}/>)

      }else if(MemeType(url) === "VID" && meme.data.secure_media){
        let memeData = {
          url: meme.data.secure_media.reddit_video.fallback_url,
          title : meme.data.title,
          author : meme.data.author}

        return (<DisplayVid key={i} i={i} meme={memeData} getMeGusta={getMeGusta} likes={likes}/>)
        
      }else if(MemeType(url) === "GFYCAT"){
            let memeData = {
              url: meme.data.url,
              title : meme.data.title,
              author : meme.data.author
                          }

        return (<DisplayGFY key={i} i={i} meme={memeData} getMeGusta={getMeGusta} likes={likes}/>)

      }else if(MemeType(url) === "GIFV"){
        let memeData = {
              url: meme.data.url,
              title : meme.data.title,
              author : meme.data.author
        }
      
        return ( <DisplayGif key={i} i={i} meme={memeData} getMeGusta={getMeGusta} likes={likes}/>)
      }
    }else return (<h1 id={i}>We b ded</h1>)

  })
  // useEffect(()=> {
  // },[likes])

  return (
    <>
    <div className="row">
    {memeList.length !== 0 ? memeList :<h1>Nothing to see, move along</h1>}
    </div>
  </>
  )
}

export default MemeMap;

