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
  const [ likes, setLikes ] = useState([]);
  const [firstLoad, setFirstLoad ] =useState(true);

let pageButtons = (<ul className="center-align pagination container">
                    <button onClick={()=>{
                      prevPage()
                      window.scrollTo(0,0)
                      }}className="btn-floating btn waves-effect waves-light indigo lighten-3"><i className="material-icons">chevron_left</i></button>
                    <li><span className='pageNum'>{page}</span></li>
                    <button onClick={()=>{
                              nextPage()
                              window.scrollTo(0,0)
                            }}className="btn-floating btn waves-effect waves-light indigo lighten-3"><i className="material-icons">chevron_right</i></button>
                  </ul>)

  const setLeMemes = (leData,memeSet,prev,next) => {
    memeSet(leData.data.data.children);
    next(leData.data.data.after);
    prev(leData.data.data.before);
  }


  const nextPage = async() => {
    let resp = await axios.get(url + (page *25 ) + '&after=' + next)
    setLeMemes(resp,setMemes,setPrev,setNext);
    setPage(page + 1)
    setFirstLoad(false)
  }

  const prevPage = async() => {
    let resp = await axios.get(url + (((page - 1) * 25) - 1) + '&before=' + prev)
    setLeMemes(resp,setMemes,setPrev,setNext);
    setPage(page - 1)
  }

  const fetchMemes = async() => {
      let resp = await axios.get(url + 25 + '&after=' + next)
      setLeMemes(resp,setMemes,setPrev,setNext);
      let likes = await axios.get('api/likes/memes')
      await setLikes(likes);

  }
  useEffect(() => {
    fetchMemes()
  },[])
return (
  <div className="memes">
  <div className="space"></div>
    {pageButtons}
    {memes && likes ?<DisplayMemes memes={memes} likes={likes} firstLoad={firstLoad}/> : null}
    {pageButtons}


  </div>
      )
}

export default Memes;
