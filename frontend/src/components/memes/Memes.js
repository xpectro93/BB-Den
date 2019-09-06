import React,  { useState, useEffect } from 'react'
import DisplayMemes from './DisplayMemes.js'
import totoro from '../../assets/totoro.gif'
import axios from 'axios';

let url = 'https://www.reddit.com/r/dankmemes/.json?&count='


const Memes = props => {
  const [ memes, setMemes ] = useState([]);
  const [ prev, setPrev ] = useState(null);
  const [ next, setNext ] = useState(null);
  const [ page, setPage ] = useState(1);
  const [ likes, setLikes ] = useState([]);
  const [firstLoad, setFirstLoad ] =useState(true);

  const setLeMemes = (leData,memeSet,prev,next) => {
    memeSet(leData.data.data.children);
    next(leData.data.data.after);
    prev(leData.data.data.before);
  }
  // const distance = () => {
  //   let test = document.getElementById("aTest")
  //   let height = test.getBoundingClientRect().top;
  //   return height
  // }


  const nextPage = async() => {
    let resp = await axios.get(url + (page *25 ) + '&after=' + next)
    setLeMemes(resp,setMemes,setPrev,setNext);
    setPage(page + 1)
    setFirstLoad(false)
  }

  const prevPage = async() => {
    if (page > 1) {
      let resp = await axios.get(url + (((page - 1) * 25) - 1) + '&before=' + prev)
      setLeMemes(resp,setMemes,setPrev,setNext);
      setPage(page - 1)
    }else {
      alert(`Baby ain't got no more back...`)
    }

  }
  const fetchMemes = async() => {
      let resp = await axios.get(url + 25 + '&after=' + next)
      setLeMemes(resp,setMemes,setPrev,setNext);

      let meGusta = await axios.get('api/likes/memes')
      setLikes(meGusta);


  }
  const getMeGusta = async () => {
    let meGusta = await axios.get('api/likes/memes')
    setLikes(meGusta);

  }
  let pageButtons = (<ul id='aTest' className="center-align pagination container">
                    <button  onClick={()=>{
                      prevPage()
                      window.scrollTo(0,0)
                      }}className="btn-floating btn waves-effect waves-light indigo lighten-3"><i className="material-icons">chevron_left</i></button>
                    <li><span className='pageNum'>{page}</span></li>
                    <button onClick={()=>{
                              nextPage()
                              window.scrollTo(0,0)
                            }}className="btn-floating btn waves-effect waves-light indigo lighten-3"><i className="material-icons">chevron_right</i></button>
                  </ul>

                  )
  useEffect(() => {
    fetchMemes()
  },[])

  useEffect(()=> {
  },[likes])
  let loadTotoro = ( <div className="container" >
                    <h1>Loading Badger relating content</h1>
                    <img src={totoro} alt='loading'/>
                    </div>)

return (
  <div className="memes center-align">
  <div className="space"></div>
    {pageButtons}
    {memes && likes.data ? <DisplayMemes getMeGusta={getMeGusta} memes={memes} likes={likes.data} firstLoad={firstLoad}/> : loadTotoro}
    {pageButtons}

  </div>
      )
}

export default Memes;
