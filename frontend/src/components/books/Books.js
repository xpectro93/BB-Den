import React,  { useState, useEffect } from 'react'
import '../../CSS/Books.css'
import M from 'materialize-css'
import axios from 'axios'

//Book components
import BookShow from './BookShow'

let url = 'https://www.googleapis.com/books/v1/volumes?q='

const Books = props => {
  const [user,setUser] = useState(props.profile);
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);


  useEffect(()=> {
    setUser(props.profile)
  },[props.profile])

  useEffect(()=> {

      let elems = document.querySelectorAll('.tabs');
      M.Tabs.init(elems);
  },[])

  const getBooks = () => {
  axios.get(url+search).then(resp => setBooks(resp.data.items))
}


return (

  <div className="books container">
  <ul className="tabs">
        <li className="tab col s3"><a className="active" href="#test1">My List</a></li>
        <li className="tab col s3"><a href="#test2">Wishlist</a></li>
        <li className="tab col s3"><a href="#test4">Rating</a></li>
  </ul>
  <h1>User Token {user.id}</h1>
  <input onChange={(e)=>setSearch(e.target.value)}/>
  <button onClick={()=>getBooks()}> Search</button>


  <div id="test1" className="col s12">Test 1</div>
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

  //
  // <ul className="tabs">
  //       <li className="tab col s3"><a href="#test1">Test 1</a></li>
  //       <li className="tab col s3"><a className="active" href="#test2">Test 2</a></li>
  //       <li className="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
  //       <li className="tab col s3"><a href="#test4">Test 4</a></li>
  // </ul>
  // <div id="test1" className="col s12">Test 1</div>
  // <div id="test2" className="col s12"><BookShow books={books}/></div>
  // <div id="test3" className="col s12">Test 3</div>
  // <div id="test4" className="col s12">Test 4</div>
