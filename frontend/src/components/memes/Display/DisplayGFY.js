import React from 'react';
import LikeMeme from '../LikeMeme'
let div1 = {
    position:"relative",
    paddingBottom: "56.25%"
}
let div2 = {
    position:'absolute',
    top:'0',
    left:'0'
}

export const DisplayGFY =({i ,meme, getMeGusta, likes})=> {

    //modified gif url to turn it into mp4
    let url =meme.data.url.split('.com')
    let content = url[0]+'.com/ifr'+url[1]

    
    
  return (
    <div id={i} className="row">

        <div className="container card col s12 offset-m2 m8 offset-l3 l6 meme">
          <div className="card-image">
          <div style={div1}>
              <iframe title={meme.title} 
              src={content} 
              frameBorder='0' scrolling='no' width='100%' height='100%' 
              style={div2}
              allowFullScreen>
                  </iframe>
            </div>
          
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

{/* <iframe title={meme.title} src={content} 
                  frameBorder='0' 
                  scrolling='no' 
                  allowFullScreen  /> */}