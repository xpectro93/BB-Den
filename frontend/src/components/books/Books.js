import React,  { useState, useEffect, useRef } from 'react'
import '../../CSS/Books.css'
import M from 'materialize-css'
import axios from 'axios'

//Book components
import BookShow from './BookShow'

let url = 'https://www.googleapis.com/books/v1/volumes?q='

const Books = props => {
  const testRef = useRef(null);
  const move = e => {
    if (testRef.current) {
      testRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }
  const [user,setUser] = useState(props.profile);
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);


  useEffect(()=> {
    setUser(props.profile)
    getAllMyBooks()
  },[props.profile])

  useEffect(()=> {
    let elems = document.querySelectorAll('.tabs');
    M.Tabs.init(elems);
  },[])

  const getBooks = () => {
  axios.get(url+search).then(resp => setBooks(resp.data.items))
  }
  const getAllMyBooks = () => {
    axios.get(`/api/likes/${localStorage.getItem("token")}`).then(res => setBooks(res.data.data))
  }
let myBooks = books ? books.map((el, index) => {
  if(el.type === 'MEME'){
    return (<div className='container col m9 meme' key={index}>
              <img className='responsive-img'src={el.likeurl} alt='leMeme'/>
            </div>)
  }else {
    return(
      <div className='meme' key={index}>
    <img  src={el.thumbnail} alt=''/>
    <a target='_blank' rel="noopener noreferrer" href={el.likeurl}>Learn More</a>
      </div>
    )
  }

}) : null;

return (

  <div  className="books container">
  <div className="space"></div>
  <ul ref={testRef} className="tabs round">
        <li className="tab col s3"><a className="active" href="#test1">My List</a></li>
        <li className="tab col s3"><a href="#test2">Wishlist</a></li>
        <li className="tab col s3"><a href="#test4">Rating</a></li>
  </ul>
  <h1>User Token {user.id}</h1>
  <input onChange={(e)=>setSearch(e.target.value)}/>
  <button onClick={()=>getBooks()}> Search</button>


  <div id="test1" className="col s12">
    {myBooks}
    <div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  <button onClick={(e)=>move(e)}>click</button>
  </div>
  <div id="test2" className="col s12"><BookShow books={books}/></div>
  <div id="test4" className="col s12">Rating</div>

  </div>


)
}

export default Books;
//Get to Books
//let books = resp.data.items <- gives array of books
// books[0].volumeInfo.authors <- array of strings
//books[0].volumeInfo.canonicalVolumeLink <- link to google page of book
//books[0].volumeInfo.title <-  title
//books[0].volumeInfo.description <-  description
//books[0].volumeInfo.imageLinks <- obj[smallThumbnail] and obj[thumbnail] <- links to pics
//books[0].previewLink <-link to preview of book <-short reading.
//Tabs
  //Add to List
  //My List [id, title, author, cover_pic]
  //Want to read []
  //Rating
