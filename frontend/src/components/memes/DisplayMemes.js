import React, { useEffect, useState } from 'react'
import LikeMeme from './LikeMeme.js'
import '../../CSS/Meme.css'



const DisplayMemes =({memes, firstLoad, likes, getMeGusta}) => {
  const vidControl = (e,isPlaying) => {
    let num = e.target.id.split('-')[1]
    let vid  = document.getElementById(`video-${num}`);
    console.log('this b my event',e);

    let audio = document.getElementById(`audio-${num}`);

    vid.currentTime = audio.currentTime;
    if(!isPlaying){
    vid.currentTime = audio.currentTime;
      vid.play();
      audio.play();
      isPlaying = !isPlaying
      return isPlaying
    }else{
      vid.pause();
      audio.pause();
      vid.currentTime = audio.currentTime;
      isPlaying = !isPlaying;
      return isPlaying
    }

  }
  let memeList = memes.map((meme,i)=> {

    let imgType = meme.data.url.slice(-3)
    let isVid = meme.data.url.includes('v.redd.it')
    if(firstLoad && i === 0){
      return(
        <div className='container warning' key={i}>
          <h1 className='flow-text' >Some Memes might be too spicy</h1>
          <h1 className='flow-text' >Proceed at your own risk</h1>
          <img className="circle responsive-img" src='https://steamuserimages-a.akamaihd.net/ugc/360653586050510880/2F485F41314D6EC9AA611689E9DC3BAA2573D5E0/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' alt='dank meme'/>
        </div>
      )
    }else{
      if(imgType ==='jpg' || imgType === 'png'){
        return (
          <div id={i} className="row" key={i}>

              <div className="container card col s12 offset-m2 m8 offset-l3 l6 meme">
                <div className="card-image">
                  <img src={meme.data.url}/>
                </div>

                <div className="row card-content">
                  <div className='col s2 m5 l2'>
                  <LikeMeme getMeGusta={getMeGusta} likes={likes} memeInfo={meme.data}/>
                  </div>
                  <div className='col s10 m7 l10'>

                  Title:<p className='flow-text'>{meme.data.title}</p>
                  <br/>
                  Author: {meme.data.author}
                  </div>
                </div>



              </div>
            </div>


        )
      }else if(isVid){
        let fallback = meme.data.secure_media.reddit_video.fallback_url.split('DASH')
        let audioUrl = fallback[0]+'audio?source=fallback'
        let isPlaying = false;
        return (
          <div  onClick={(e)=>{
                    isPlaying = vidControl(e,isPlaying)
                  }} id={i} className="row" key={i}>
          <div className="container card col s12 offset-m2 m8 offset-l3 l6 meme">

          <div className="card-image">
            <video className="card-video" id={`video-${i}`} autoPlay={false}>
              <source src={meme.data.secure_media.reddit_video.fallback_url} type="video/mp4"/>
            </video>
            <audio id={`audio-${i}`} autoPlay={false} src={audioUrl}> Something</audio>
          </div>

          <div className="row card-content">
            <div className='col s2 m5 l2'>
            <LikeMeme getMeGusta={getMeGusta} likes={likes} memeInfo={meme.data}/>
            </div>
            <div className='col s10 m7 l10'>

            Title:<p className='flow-text'>{meme.data.title}</p>
            <br/>
            Author: {meme.data.author}
            </div>
          </div>


          </div>
          </div>

        )

      }
    }

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

export default DisplayMemes;
// <UnlikeMeme likes={likes} r={r} likeSet={likeSet} remove={remove} getMeGusta={getMeGusta} memeInfo={meme.data}/>
