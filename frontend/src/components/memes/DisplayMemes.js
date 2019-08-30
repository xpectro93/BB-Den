import React, { useEffect, useState } from 'react'

const DisplayMemes = ({memes}) => {

  let memeList = memes.map((meme,i)=> {
    let imgType = meme.data.url.slice(-3)
    if(imgType ==='jpg' || imgType === 'png'){
      return (
        <div key={i}>
        <img src={meme.data.url} alt='dank meme'/>
        </div>
      )
    }
  })


  return (
    <>
    <h1>DisplayMemes</h1>
    {memes ? memeList :
      <>
      Its loading
      </>


    }

  </>
  )
}

export default DisplayMemes;
