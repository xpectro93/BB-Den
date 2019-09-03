import React,  { useState, useEffect } from 'react'
import * as Util from '../../util/util'
import DisplayMemes from './DisplayMemes.js'
import axios from 'axios';

let url = 'https://www.reddit.com/r/dankmemes/.json?&count='
const Memes = props => {
  const [ memes, setMemes ] = useState([]);
  const [ prev, setPrev ] = useState(null);
  const [ next, setNext ] = useState(null);
  const [page, setPage ] = useState(1);

  const setLeMemes = (thing,memeSet,prev,next) => {
    memeSet(thing.data.data.children);
    next(thing.data.data.after);
    prev(thing.data.data.before);
  }


  const nextPage = async() => {
    let resp = await axios.get(url + (page *25 ) + '&after=' + next)
    setLeMemes(resp,setMemes,setPrev,setNext);
    setPage(page + 1)
  }

  const prevPage = async() => {
    let resp = await axios.get(url + (((page - 1) * 25) - 1) + '&before=' + prev)
    setLeMemes(resp,setMemes,setPrev,setNext);
    setPage(page - 1)
  }

  const fetchMemes = async() => {
      let resp = await axios.get(url + 25 + '&after=' + next)
      setLeMemes(resp,setMemes,setPrev,setNext);

  }
  useEffect(() => {
    fetchMemes()
  },[])
return (
  <div className="memes">
  <ul className="center-align pagination container">
      <button onClick={()=>prevPage()}className="button waves-effect"><i className="material-icons">chevron_left</i></button>
      {page}
      <button onClick={()=>nextPage()}className="button waves-effect"><i className="material-icons">chevron_right</i></button>
  </ul>
    <DisplayMemes memes={memes} />
    <ul className="center-align pagination container">
        <button onClick={()=>prevPage()}className="button waves-effect"><i className="material-icons">chevron_left</i></button>
        {page}
        <button onClick={()=>nextPage()}className="button waves-effect"><i className="material-icons">chevron_right</i></button>
    </ul>

  </div>
      )
}

export default Memes;
