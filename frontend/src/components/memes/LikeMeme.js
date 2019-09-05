import React, { useEffect, useState } from 'react';
import axios from 'axios'
import M from 'materialize-css'

const LikeMeme = ({memeInfo, getMeGusta}) => {
  const postMeme = async() => {
    let body = {
      userid:+localStorage.getItem('token'),
      type:'MEME',
      status:null,
      thumbnail:`${memeInfo.title}=^-^=${memeInfo.author}`,
      likeurl:memeInfo.url
    }
  let resp =  await axios.post('/api/likes',body)
  }

  return <a onClick={()=> {
                          postMeme()
                          M.toast({html: 'Saved to your stash of memes.', classes: 'rounded toast'})
                          getMeGusta()
                          }
                    } className="btn-floating halfway-fab waves-effect waves-light indigo lighten-3"><i className="material-icons">add</i></a>

};

export default LikeMeme;
