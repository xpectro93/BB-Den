import React, { useEffect, useState } from 'react';
import axios from 'axios'
import M from 'materialize-css'

const LikeMeme = ({memeInfo, getMeGusta,likes}) => {
  const [ likeSet, setLikeSet ] = useState(new Set())

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
  const deleteMeme = async() => {
    likeSet.delete(memeInfo.url)
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
    let likeSet = new Set()
    likes.data.forEach(like => {
      likeSet.add(like.likeurl)
    })
    setLikeSet(likeSet)
  },[likeSet])

  useEffect(()=> {
    let likeSet = new Set()
    likes.data.forEach(like => {
      likeSet.add(like.likeurl)
    })
    setLikeSet(likeSet)
  },[])

  if(likeSet.has(memeInfo.url)){
    return <a onClick={async()=> {
                              await deleteMeme()
                              M.toast({html: 'Deleted meme from you stash', classes: 'rounded toast'})
                              await getMeGusta()

                            }
                      } className="btn-floating halfway-fab waves-effect waves-light indigo lighten-3"><i className="material-icons">remove</i></a>
  }else{
    return <a onClick={()=> {
                              postMeme()
                              M.toast({html: 'Saved to your stash of memes.', classes: 'rounded toast'})
                              getMeGusta()

                            } }className="btn-floating halfway-fab waves-effect waves-light indigo lighten-3" ><i className="material-icons">add</i></a>

  }






};

export default LikeMeme;
