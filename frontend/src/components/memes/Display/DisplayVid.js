import React from 'react';
import LikeMeme from '../LikeMeme'

export const DisplayVid = ({i, meme, getMeGusta, likes}) => {
  //controls vid pause and play settings
  const vidControl = (e,isPlaying) => {
    let num = e.target.id.split('-')[1]
    let vid  = document.getElementById(`video-${num}`);
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
        let vidUrl = meme.url
        let fallback = meme.url.split('DASH')
        let audioUrl = fallback[0]+'audio?source=fallback'
        let isPlaying = false;

       
        return (
          
          <div key={i} id={`container-${i}`} className="container card col s12 offset-m1 m4  offset-l1 l4 meme">

          <div id={`cardimg-${i}`} className="card-image" onClick={(e)=>{
                    isPlaying = vidControl(e,isPlaying)
                  }} >
            <video className="card-video" id={`video-${i}`} autoPlay={false}>
              <source src={vidUrl} type="video/mp4"/>
            </video>
            <audio id={`audio-${i}`} autoPlay={false} src={audioUrl}> Something</audio>
          </div>

          <div id={`cardContent-${i}`} className="row card-content">
            <div id={`likeC-${i}`} className='col s2 m5 l2'>
            <LikeMeme i={i}getMeGusta={getMeGusta} likes={likes} memeInfo={meme}/>
            </div>
            <div id={`tdiv-${i}`} className='col s10 m7 l10'>

            Title:<p id={`title-${i}`}className='flow-text'>{meme.title}</p>
            <br/>
            Author: {meme.author}
            </div>
          </div>


          </div>
            )

}
