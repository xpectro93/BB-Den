import React,  { useState, useEffect } from 'react'
import MemeMap from './MemeMap.js';
import totoro from '../../assets/totoro.gif';
// import memepic from '../../assets/cat.png';
// import tiktok from '../../assets/tiktok.png';
// import quora from '../../assets/quora.png';
import axios from 'axios';
import M from 'materialize-css'

//reddits of interest -> InsanePeopleQuora, TikTokCringe, dankmemes
// let url = 'https://www.reddit.com/r/dankmemes/controversial.json?&count='
let url = 'https://www.reddit.com/r/'
// const useForceUpdate = () => useState()[1];
const Memes = props => {
  // const forceUpdate = useForceUpdate();
  const [ content, setContent ] = useState([]);
  const [ prev, setPrev ] = useState(null);
  const [ next, setNext ] = useState(null);
  const [ page, setPage ] = useState(1);
  const [ likes, setLikes ] = useState([]);
  const [firstLoad, setFirstLoad ] = useState(true);
  const [ searchInput, setSearchInput ] = useState('')
  const [ currentType, setCurrentType ] = useState(props.match.params.id)

  const setLeContent = (leData,contentSet,prev,next) => {
    contentSet(leData.data.data.children);
    next(leData.data.data.after);
    prev(leData.data.data.before);
  }

  const nextPage = async() => {
    try{
    let resp = await axios.get(url + currentType+'.json?&count=' + (page * 25 ) + '&after=' + next)
    setLeContent(resp,setContent,setPrev,setNext);
    setPage(page + 1)
    setFirstLoad(false)

    }catch(err){
      // console.log(err);
      
    }
    
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
    try{
      let resp = await axios.get(url+ currentType +'/.json?&count='+ 25 + '&after=' + next)
      setLeContent(resp,setContent,setPrev,setNext);
      getMeGusta()
    }catch(err){
      // console.log(err);
      
    }
      
  }
  const getMeGusta = async () => {
    try{
    let melike = await axios.get(`/api/likes/${localStorage.getItem("token")}`)
    setLikes(melike);
    }catch(err){
      // console.log(err);
      
    }
    

  }
  const changeTopic = () => {
    setContent([]);
    setNext(null);
    setPrev(null);
    fetchContent()
  }

  const makeSearchBar = () => {
    return (<div className='row'>
    <form className='container' onSubmit={(e)=>{
                    // e.preventDefault()
                    if(searchInput !== ''){
                      let input = searchInput.replace(/\s/g,"")
                      props.history.push(`/memes/${input}`)
                      changeTopic()
                    }
                    }}>
             <div className="input-field">
            <input  id='digup' type="text" className="validate"
            onChange={(e)=>setSearchInput(e.target.value)}/>
            <label className="truncate" htmlFor="digup">Type a word to search for specific content.(ex."apples", "filthyfrank", "h3h3productions") </label>
            <button className='btn round indigo lighten-3' type='submit' >Search the badger's den</button>
          </div>
    </form>
   </div>)
  }

  let pageButtons = (<ul id='aTest' className="center-align pagination container">
                    <button  onClick={()=>{
                      prevPage()
                      window.scrollTo(0,0)
                      }} className="btn-floating btn waves-effect waves-light indigo lighten-3"><i className="material-icons">chevron_left</i></button>
                    <li><span className='pageNum'>{page}</span></li>
                    <button onClick={()=>{
                              nextPage()
                              window.scrollTo(0,0)
                            }}className="btn-floating btn waves-effect waves-light indigo lighten-3"><i className="material-icons">chevron_right</i></button>
                     </ul>)

  useEffect(() => {
    fetchContent()
    var elems = document.querySelectorAll('select');
    // eslint-disable-next-line no-unused-vars
    var instances = M.FormSelect.init(elems);
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=> {
    setCurrentType(props.match.params.id)
    changeTopic()
    setPage(1)
    fetchContent()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentType,props.match.params.id])

  useEffect(()=> {

  },[likes])
  let loadTotoro = ( <div className="container" >
                    <h1>Looking for  Badger related content</h1>
                    <img className='responsive-img'src={totoro} alt='loading'/>
                    </div>)

if(currentType === ''){
  return(<h1>FML</h1>)
}else{

  


  return (
    
    <div className="memes center-align">
    <div className="space"></div>
      {/* {makeTypeList()} */}
      {makeSearchBar()}

      {pageButtons}
      {content && likes.data ? <MemeMap getMeGusta={getMeGusta} memes={content} likes={likes.data} firstLoad={firstLoad}/> : loadTotoro}
      {pageButtons}

    </div>
        )
}

}

export default Memes;

