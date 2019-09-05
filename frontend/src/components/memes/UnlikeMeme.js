import React, { useEffect, useState } from 'react';
import axios from 'axios'
import M from 'materialize-css'

const UnlikeMeme = ({memeInfo, getMeGusta,likes}) => {


  const deleteMeme = async() => {
  let memes = await axios.get(`/api/likes/memes`)
  let memeId;
  memes.data.data.filter(el=> {

    if(el.userid === +localStorage.getItem('token') && el.likeurl ===memeInfo.url){
      memeId = el.post_id;
    }
  })
  let resp =  await axios.delete(`/api/likes/${memeId}`)

  }
  useEffect(()=> {
    console.log('unlike render');

  },[likes])

  return <a onClick={()=> {
                          deleteMeme()
                          M.toast({html: 'Deleted meme from you stash', classes: 'rounded toast'})
                          console.log('Me gusta at unlikeMeme');
                          }
                    } className="btn-floating halfway-fab waves-effect waves-light indigo lighten-3"><i className="material-icons">remove</i></a>

};

export default UnlikeMeme;
