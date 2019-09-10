import React,  { useState, useEffect } from 'react'
import DisplayMemes from './DisplayMemes.js'
import totoro from '../../assets/totoro.gif'
import axios from 'axios';
import M from 'materialize-css'
//reddits of interest -> InsanePeopleQuora, TikTokCringe, dankmemes
// let url = 'https://www.reddit.com/r/dankmemes/controversial.json?&count='
let url = 'https://www.reddit.com/r/'

const Memes = props => {
  const [memeTopic, quoraTopic, tiktokTopic ] = ['dankmemes', 'InsanePeopleQuora', 'TikTokCringe'];
  const [ content, setContent ] = useState([]);
  const [ prev, setPrev ] = useState(null);
  const [ next, setNext ] = useState(null);
  const [ page, setPage ] = useState(1);
  const [ likes, setLikes ] = useState([]);
  const [firstLoad, setFirstLoad ] =useState(true);

  const [ currentType, setCurrentType ] = useState('dankmemes')


  const setLeContent = (leData,contentSet,prev,next) => {
    contentSet(leData.data.data.children);
    next(leData.data.data.after);
    prev(leData.data.data.before);
  }

  const nextPage = async() => {
    let resp = await axios.get(url + (page *25 ) + '&after=' + next)
    setLeContent(resp,setContent,setPrev,setNext);
    setPage(page + 1)
    setFirstLoad(false)
  }

  const prevPage = async() => {
    if (page > 1) {
      let resp = await axios.get(url + (((page - 1) * 25) - 1) + '&before=' + prev)
      setLeContent(resp,setContent,setPrev,setNext);
      setPage(page - 1)
    }else {
      alert(`Baby ain't got no more back...`)
    }

  }
  const fetContent = async() => {
      let resp = await axios.get(url+ currentType +'/controversial.json?&count='+ 25 + '&after=' + next)
      setLeContent(resp,setContent,setPrev,setNext);

      getMeGusta()

  }
  const getMeGusta = async () => {
    let meGusta = await axios.get('api/likes/memes')
    setLikes(meGusta);

  }
  const changeTopic = type => {
    setLeContent([],null,null)
    setPage(1)
    setCurrentType('memes')
  }
  const makeTypeList = () => {

    let select = (<div class="input-field col s12 m6">
        <select class="icons">
          <option value="" data-icon="images/yuna.jpg" className="left">Dank Memes</option>
          <option value="" data-icon="images/yuna.jpg" className="left">Quora Madness</option>
          <option value="" data-icon="images/yuna.jpg" className="left">TikTok Cringe</option>
        </select>
        <label>Choose something to gnaw on</label>
        </div>)

    // <option value="" disabled selected>Choose your option</option>
    return select
  }

//   changeSubreddit(sub) {
//   /*
//    * Empty the files so we will show 'Loading...'
//    * Reset page to 1
//    */
//   this.setState({
//     files: [],
//     currentSubreddit: sub,
//     page: 1
//   });
//   fetch(this.url + sub + "/" + this.state.sort + '.json')
//     .then(res => res.json())
//     .then((data) => {
//       this.setState({
//         files: data.data.children,
//         after: data.data.after,
//         before: data.data.before
//       });
//       window.scrollTo(0, 0);
//     })
//     .catch(console.log)
// }

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
    fetContent()
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
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
    {makeTypeList()}
    {pageButtons}
    {content && likes.data ? <DisplayMemes getMeGusta={getMeGusta} memes={content} likes={likes.data} firstLoad={firstLoad}/> : loadTotoro}
    {pageButtons}

  </div>
      )
}

export default Memes;
