import React,  { useState, useEffect } from 'react'
import '../../CSS/Books.css'
import axios from 'axios'

//Book components
import BookShow from './BookShow'

let url = 'https://www.googleapis.com/books/v1/volumes?q='

const Books = props => {
  const [user,setUser] = useState(props.profile);
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState({})
  useEffect(()=> {
    setUser(props.profile)
  },[props.profile])
  useEffect(()=> {
    fetch()
  },[])
const fetch = () => {
  axios.get(url+'harry').then(resp => setBooks(resp.data.items))
}


return (

  <div className="books">
  <h1>user</h1>
  <h1>User Token {user.id}</h1>
  <img src={user.profile_pic} alt='User profile'/>
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
