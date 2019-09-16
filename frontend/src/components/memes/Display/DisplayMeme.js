import React from 'react';
import LikeMeme from '../LikeMeme'


export const DisplayMeme =({i ,meme, getMeGusta, likes})=> {
  return (
    <div id={i} className="row">

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
}
