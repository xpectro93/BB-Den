import React, { useState } from 'react';

const BookShow = props => {

if(!props.books){
  return (<>
    <h1>Loading</h1>
    </>)
}else{

let bookShow = props.books.map((aSingleBook, i )=> {
  let book = aSingleBook.volumeInfo

  return (
    <div className='book' key={i}>
    <h1>{book.title}</h1>
    <img src={book.imageLinks.smallThumbnail} alt='book cover'/>
    <p>{book.description}</p>
    <a href={book.previewLink}> Book Preview</a>
    <br/>
    <a href={book.canonicalVolumeLink}>Google page</a>

    </div>
  )
})

  return (
    <div className='BookShow'>
    <h1>This is the book show component</h1>
      {bookShow}
    </div>
        )
}
}

export default BookShow;
// books[0].volumeInfo.authors <- array of strings
//books[0].volumeInfo.canonicalVolumeLink <- link to google page of book
//books[0].volumeInfo.title <-  title
//books[0].volumeInfo.description <-  description
//books[0].volumeInfo.imageLinks <- obj[smallThumbnail] and obj[thumbnail] <- links to pics
//books[0].previewLink <-link to preview of book <-short reading.
