import React, { useEffect, useState } from 'react'
import LikeMeme from './LikeMeme.js'
import UnlikeMeme from './UnlikeMeme.js'
import '../../CSS/Meme.css'

const useForceUpdate = () => useState()[1];

const DisplayMemes =({memes, firstLoad, likes, getMeGusta}) => {
  let likeSet = new Set()
  likes.data.forEach(like => {
    likeSet.add(like.likeurl);
  })
  const remove = url => likeSet.delete(url)
  const forceUpdate = useForceUpdate();


  let memeList = memes.map((meme,i)=> {

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
                  {likeSet.has(meme.data.url)?
                   <span onClick={() => {
                            remove(meme.data.url)
                            console.log(likeSet);
                            forceUpdate()

                            }}><UnlikeMeme likes={likes} getMeGusta={getMeGusta} memeInfo={meme.data}/></span>
                  :<LikeMeme getMeGusta={getMeGusta} memeInfo={meme.data}/>}
                  </div>
                  <div className="card-content">
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
  useEffect(()=> {
    console.log('likes changed',likeSet);
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
