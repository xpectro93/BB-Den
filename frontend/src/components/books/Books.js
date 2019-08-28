import React,  { useState, useEffect } from 'react'
import '../../CSS/Books.css'
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
  },[books])
const getBooks = () => {
  axios.get(url+search).then(resp => setBooks(resp.data.items))
}

console.log(books);
return (

  <div className="books">
  <h1>user</h1>
  <h1>User Token {user.id}</h1>
  <img src={user.profile_pic} alt='User profile'/>
  {search}
  <input onChange={(e)=>setSearch(e.target.value)}/>
  <button onClick={()=>getBooks()}> Search</button>
  <BookShow books={books}/>

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
  //My List
  //Want to read
  //Rating
