import React, { useEffect, useState } from 'react'
import LikeMeme from './LikeMeme.js'
import '../../CSS/Meme.css'
import totoro from '../../assets/totoro.gif'

const DisplayMemes = ({memes, firstLoad, likes}) => {

  let memeList = memes.map((meme,i)=> {

  if(likes.data !== undefined && memes.data !== undefined){
  likes.data.data.forEach(like => {
    console.log(like.likeurl);
    console.log(meme.url);
  })
  }
    let imgType = meme.data.url.slice(-3)
    if(firstLoad && i === 1 ){
      return(
        <div className='container warning' key={i}>
          <h1>Some Memes might be too spicy</h1>
          <h1>Proceed at your own risk</h1>
        <img className="circle responsive-img" src='https://steamuserimages-a.akamaihd.net/ugc/360653586050510880/2F485F41314D6EC9AA611689E9DC3BAA2573D5E0/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' alt='dank meme'/>
        </div>
      )
    }else{
      if(imgType ==='jpg' || imgType === 'png'){
        return (

            <div className="container row" key={i}>

                <div className=" container card col m9 meme">
                  <div className="card-image">
                    <img src={meme.data.url}/>
               <LikeMeme memeInfo={meme.data}/>
                  </div>
                  <div className="card-content">
                    <p>
                    Title:<i>{meme.data.title}</i>
                    <br/>
                    Author: {meme.data.author}
                    </p>
                  </div>

                </div>
              <div className='divider'></div>
              </div>

        )
      }
    }

  })
let itsLoading = ( <div className="container" >
                  <h1>Loading Badger relating content</h1>
                  <img src={totoro} alt='loading'/>
                  </div>)
  return (
    <>
    <div className='center-align'>

    {memeList.length!== 0 ? memeList :itsLoading}
    </div>
  </>
  )
}

export default DisplayMemes;

// <div class="row">
//     <div class="col s12 m6">
//       <div class="card meme">
//         <div class="card-image">
//           <img src={meme.data.url}>
//           <span class="card-title">{meme.data.title}</span>
//           <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
//         </div>
//         <div class="card-content">
//           <p>Author: {meme.data.author}</p>
//         </div>
//       </div>
//     </div>
//   </div>


// <div className='center-align container meme' key={i}>
// <h3>{meme.data.title}</h3>
// <img className="responsive-img" src={meme.data.url} alt='dank meme'/>
// </div>
