import React from 'react';
import LikeMeme from '../LikeMeme'


export const DisplayMeme =({i ,meme, getMeGusta, likes})=> {

  
  return (
    

        <div id ={i} className="container card col s12 offset-m1 m4  offset-l1 l4 meme">
          <div className="card-image">
            <img src={meme.url} alt="content"/>
          </div>

          <div className="row card-content">
            <div className='col s2 m5 l2'>
            <LikeMeme getMeGusta={getMeGusta} likes={likes} memeInfo={meme}/>
            </div>
            <div className='truncate col s10 m7 l10'>

            Title:<p className='truncate'>{meme.title}</p>
            <br/>
            Author: {meme.author}
            </div>
          </div>



        </div>
  
  )
}
