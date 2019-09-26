import React from 'react';
import LikeMeme from '../LikeMeme'


export const DisplayGif =({i ,meme, getMeGusta, likes})=> {
    console.log('this is gif',meme);
    //modified gif url to turn it into mp4
    let gifUrl = meme.url.slice(6,-5)+'.mp4'
    let jpgUrl = meme.url.slice(6,-5)+'.jpg'

    
    
  return (
  

        <div id={i} className="container col s12 offset-m1 m4  offset-l1 l4 meme">
          <div className="card-image">
          <video poster={jpgUrl} width='100%' preload="auto" autoPlay="autoplay" muted="muted" loop="loop" webkit-playsinline="">
                <source src={gifUrl} type="video/mp4"/>
          </video>
          </div>

          <div className="row card-content">
            <div className='col s2 m5 l2'>
            <LikeMeme getMeGusta={getMeGusta} likes={likes} memeInfo={meme.url}/>
            </div>
            <div className='col s10 m7 l10'>

            Title:<p className='flow-text'>{meme.title}</p>
            <br/>
            Author: {meme.author}
            </div>
          </div>



        </div>
    
  )
}