import React,  { useState, useEffect } from 'react'
import DisplayMemes from './DisplayMemes.js';
import totoro from '../../assets/totoro.gif';
import memepic from '../../assets/cat.png';
import tiktok from '../../assets/tiktok.png';
import quora from '../../assets/quora.png';
import axios from 'axios';
import M from 'materialize-css'

//reddits of interest -> InsanePeopleQuora, TikTokCringe, dankmemes
// let url = 'https://www.reddit.com/r/dankmemes/controversial.json?&count='
let url = 'https://www.reddit.com/r/'

const useForceUpdate = () => useState()[1];
const Memes = props => {
  const forceUpdate = useForceUpdate();
  const [ content, setContent ] = useState([]);
  const [ prev, setPrev ] = useState(null);
  const [ next, setNext ] = useState(null);
  const [ page, setPage ] = useState(1);
  const [ likes, setLikes ] = useState([]);
  const [firstLoad, setFirstLoad ] =useState(true);

  const [ currentType, setCurrentType ] = useState(props.match.params.id)


  const setLeContent = (leData,contentSet,prev,next) => {
    contentSet(leData.data.data.children);
    next(leData.data.data.after);
    prev(leData.data.data.before);
  }

  const nextPage = async() => {
    let resp = await axios.get(url + currentType+'.json?&count=' + (page *25 ) + '&after=' + next)
    setLeContent(resp,setContent,setPrev,setNext);
    setPage(page + 1)
    setFirstLoad(false)
  }

  const prevPage = async() => {
    if (page > 1) {
      let resp = await axios.get(url + currentType +'.json?&count=' + (((page - 1) * 25) - 1) + '&before=' + prev)
      setLeContent(resp,setContent,setPrev,setNext);
      setPage(page - 1)
    }else {
      alert(`Baby ain't got no more back...`)
    }

  }
  const fetchContent = async() => {
      let resp = await axios.get(url+ currentType +'/.json?&count='+ 25 + '&after=' + next)
      console.log('At fetch',resp);
      setLeContent(resp,setContent,setPrev,setNext);
      getMeGusta()

  }
  const getMeGusta = async () => {
    let meGusta = await axios.get('/api/likes/memes')
    setLikes(meGusta);

  }
  const changeTopic = () => {
    setContent([]);
    setNext(null);
    setPrev(null);
    fetchContent()
  }

  const makeTypeList = () => {

    let select = (
      <div className='row'>
        <div className="input-field col s10 offset-s1 offset-m3 m6 offset-l3 l6">
        <select className="icons" onChange={(e)=>{setCurrentType(e.target.value)
                  changeTopic()
                                                            }}>
          <option value="" disabled defaultValue>Choose your option</option>
          <option value="dankmemes" data-icon={memepic} className="left">Dank Memes</option>
          <option value="InsanePeopleQuora" data-icon={quora} className="left">Quora Madness</option>
          <option value="TikTokCringe" data-icon={tiktok} className="left">TikTok Cringe</option>
        </select>
        <label>Choose something to gnaw on</label>
        </div>
        </div>)
    return select
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
                     </ul>)

  useEffect(() => {
    fetchContent()
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  },[])
  useEffect(()=> {
    console.log('at currentType',currentType);
    changeTopic()
    setPage(1)
    fetchContent()
  },[currentType])

  useEffect(()=> {

  },[likes])
  let loadTotoro = ( <div className="container" >
                    <h1>Loading Badger relating content</h1>
                    <img className='responsive-img'src={totoro} alt='loading'/>
                    </div>)
if(currentType === ''){
  return(<h1>FML</h1>)
}else{

  return (
    <div className="memes center-align">
    <div className="space"></div>
      {makeTypeList()}

      {pageButtons}
      {content && likes.data ? <DisplayMemes getMeGusta={getMeGusta} memes={content} likes={likes.data} firstLoad={firstLoad}/> : loadTotoro}
      {pageButtons}

    </div>
        )
}

}

export default Memes;

// <video id='leVid' controls onPlay={(e)=>{
//   let vid = document.getElementById(e.target.id);
//   let audio = document.getElementById('leAudio');
//
//   audio.currentTime  = vid.currentTime
//   }} autoplay="false">
//   <source src="https://v.redd.it/aq8do2qz75m31/DASH_1080?source=fallback" type="video/mp4"/>
// </video>
// <audio id='leAudio' autoplay='true' src="https://v.redd.it/aq8do2qz75m31/audio?source=fallback"> Something</audio>
