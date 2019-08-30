import React,  { useState, useEffect } from 'react'
import * as Util from '../../util/util'
import DisplayMemes from './DisplayMemes.js'


const Memes = props => {
  const [ memes, setMemes ] = useState([]);

  const fetchMemes = async() => {

      let resp = await Util.getMemes()
      setMemes(resp.data.data.children);
      console.log(resp);

  }
  useEffect(() => {
    fetchMemes()
  },[])
return (
  <div className="memes">
    <h1>ShoW me WhAT YoU GoT</h1>
    <DisplayMemes memes={memes} />

  </div>
      )
}

export default Memes;
