import React from 'react';
import LikeMeme from '../LikeMeme'


export const DisplayGif =({i ,meme, getMeGusta, likes})=> {
    console.log('this is gif',meme);
    //modified gif url to turn it into mp4
    let gifUrl = meme.data.url.slice(6,-5)+'.mp4'
    let jpgUrl = meme.data.url.slice(6,-5)+'.jpg'

    
    
  return (
    <div id={i} className="row">

        <div className="container card col s12 offset-m2 m8 offset-l3 l6 meme">
          <div className="card-image">
          <video poster={jpgUrl} width='100%' preload="auto" autoPlay="autoplay" muted="muted" loop="loop" webkit-playsinline="">
                <source src={gifUrl} type="video/mp4"/>
          </video>
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