import React, { useEffect, useState } from 'react'
import '../../CSS/Meme.css'

const DisplayMemes = ({memes}) => {

  let memeList = memes.map((meme,i)=> {
    console.log(meme,i);
    let page1,page2,page3,page4,page5 = []
    let imgType = meme.data.url.slice(-3)
    if(i===0){
      return(
        <div className='container meme' key={i}>
        <img className="responsive-img" src='https://steamuserimages-a.akamaihd.net/ugc/360653586050510880/2F485F41314D6EC9AA611689E9DC3BAA2573D5E0/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' alt='dank meme'/>
        </div>
      )
    }else{
      if(imgType ==='jpg' || imgType === 'png'){
        return (

            <div class="container row something ">

                <div class=" container card col m9 meme">
                  <div class="card-image">
                    <img src={meme.data.url}/>
                    <a class="btn-floating halfway-fab waves-effect waves-light indigo lighten-3"><i class="material-icons">add</i></a>
                  </div>
                  <div class="card-content">
                    <p>
                    Title:<i>{meme.data.title}</i>
                    <br/>
                    Author: {meme.data.author}
                    </p>
                  </div>

                </div>
              </div>

        )
      }
    }

  })
let itsLoading = <h1>PreLoad</h1>
  return (
    <>
    <div className='center-align'>
    <h1>ShoW me WhAT YoU GoT</h1>
    {memes ? memeList :itsLoading}
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
