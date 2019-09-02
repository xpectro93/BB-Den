import React, { useEffect, useState } from 'react'
import '../../CSS/Meme.css'

const DisplayMemes = ({memes}) => {

  let memeList = memes.map((meme,i)=> {
    let imgType = meme.data.url.slice(-3)
    if(imgType ==='jpg' || imgType === 'png'){
      return (
        <div className='center-align meme' key={i}>
        <img className="responsive-img" src={meme.data.url} alt='dank meme'/>
        </div>
      )
    }
  })
let itsLoading = <h1>PreLoad</h1>
console.log('this is memelist', memeList);
  return (
    <>
    <h1>DisplayMemes</h1>
    {memes ? memeList :itsLoading}

  </>
  )
}

export default DisplayMemes;
