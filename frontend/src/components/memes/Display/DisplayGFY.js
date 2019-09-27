import React from 'react';
import LikeMeme from '../LikeMeme'
import '../../../CSS/Meme.css'
let div1 = {
    position:"relative",
    paddingBottom: "56.25%"
}
let div2 = {
    position:'absolute',
    top:'0',
    left:'0'
}
// Uses i from map, url=meme, fetchofLikes(refresh likes), likes

export const DisplayGFY =({i ,meme, getMeGusta, likes,title,author})=> {
    // console.log(meme.url)
    //modified gif url to turn it into mp4
    let url = meme.url.split('.com')
    // let url =meme.data.url.split('.com')
    if(url[1].includes('fr')){
      url[1] = url[[1]].replace('/fr/','/')
    }
    let content = url[0]+'.com/ifr'+url[1]

  return (
        <div id={i} className="container col s12 offset-m1 m4  offset-l1 l4 meme memeGFY">
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
            <LikeMeme getMeGusta={getMeGusta} likes={likes} memeInfo={meme}/>
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

