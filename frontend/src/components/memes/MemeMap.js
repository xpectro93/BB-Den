import React, { useEffect, useState } from 'react'
// import LikeMeme from './LikeMeme.js'
import { DisplayMeme } from './Display/DisplayMeme'
import { DisplayVid } from './Display/DisplayVid'
import '../../CSS/Meme.css'



const MemeMap =({memes, firstLoad, likes, getMeGusta}) => {

  
  const memeType = url => {
    let type;
    if(url.includes('jpg'||'png')) type = 'IMG'
    else if(url.includes('v.redd.it'))type = 'VID'
    else if(url.includes('gfycat')) type = 'GFYCAT'
    else if(url.includes('gifv')) type = 'GIFV'
    else type = null;
    return type
  }
  let memeList = memes.map((meme,i)=> {
    let url = meme.data.url;
    // let imgType = meme.data.url.slice(-3)
    // let isVid = meme.data.url.includes('v.redd.it')
    if(firstLoad && i === 0){
      return(
        <div className='container warning' key={i}>
          <h1 className='flow-text' >Some Memes might be too spicy</h1>
          <h1 className='flow-text' >Proceed at your own risk</h1>
          <img className="circle responsive-img" src='https://steamuserimages-a.akamaihd.net/ugc/360653586050510880/2F485F41314D6EC9AA611689E9DC3BAA2573D5E0/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' alt='dank meme'/>
        </div>
      )
    }else if(meme && meme.data){
      if(memeType(url) === "IMG"){
        return ( <DisplayMeme key={i} i={i} meme={meme} getMeGusta={getMeGusta} likes={likes}/>  )
      }else if(memeType(url) === "VID" && meme.data.secure_media){

        return (<DisplayVid key={i} i={i} meme={meme} getMeGusta={getMeGusta} likes={likes}/>)

      }else if(memeType(url) === "GFYCAT") return <h1>MEOW</h1>
       else if(memeType(url) === "GIFV") return <h1>LOOPER</h1>
    }else return (<h1 id={i}>We b ded</h1>)

  })
  useEffect(()=> {
console.log('rerender at displaymemes');
  },[likes])

  return (
    <>
    <div className='center-align'>

    {memeList.length!== 0 ? memeList :null}
    </div>
  </>
  )
}

export default MemeMap;
// <UnlikeMeme likes={likes} r={r} likeSet={likeSet} remove={remove} getMeGusta={getMeGusta} memeInfo={meme.data}/>


// let fallback = meme.data.secure_media.reddit_video.fallback_url.split('DASH')
//         let audioUrl = fallback[0]+'audio?source=fallback'
//         let isPlaying = false;
//         return (
//           <div id={i} className="row" key={i}>
//           <div id={`container-${i}`} className="container card col s12 offset-m2 m8 offset-l3 l6 meme">

//           <div id={`cardimg-${i}`} className="card-image" onClick={(e)=>{
//                     isPlaying = vidControl(e,isPlaying)
//                   }} >
//             <video className="card-video" id={`video-${i}`} autoPlay={false}>
//               <source src={meme.data.secure_media.reddit_video.fallback_url} type="video/mp4"/>
//             </video>
//             <audio id={`audio-${i}`} autoPlay={false} src={audioUrl}> Something</audio>
//           </div>

//           <div id={`cardContent-${i}`} className="row card-content">
//             <div id={`likeC-${i}`} className='col s2 m5 l2'>
//             <LikeMeme i={i}getMeGusta={getMeGusta} likes={likes} memeInfo={meme.data}/>
//             </div>
//             <div id={`tdiv-${i}`} className='col s10 m7 l10'>

//             Title:<p id={`title-${i}`}className='flow-text'>{meme.data.title}</p>
//             <br/>
//             Author: {meme.data.author}
//             </div>
//           </div>


//           </div>
//           </div>  )
