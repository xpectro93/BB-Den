import React, {useState, useEffect} from 'react'
import '../CSS/Meme.css'
import M from 'materialize-css'
import looking from '../assets/looking.gif'
import pusheen from '../assets/pusheen.gif'


export const Tutorial = props => {
    const [lookup, setLookup] = useState('')
    useEffect(()=> {
      document.addEventListener('DOMContentLoaded', function() {
         var elems = document.querySelectorAll('.collapsible');
         // eslint-disable-next-line no-unused-vars
         var instances = M.Collapsible.init(elems);
       });
    })
    return (
       <>
        <div className='center-align tut'>
         <div className='space'></div>
         <div className='space'></div>

         <div className='row'>
         <div>Welcome to the Bluebadger Army!</div>
         
         <ul className="round col s12 offset-m4 m3 offset-l5 l2 collapsible">
         <li>
            <div className="round collapsible-header">What do the post background colors mean?(click to for tips and info about site)</div>
            <div className="collapsible-body">
               <span>
               <div>Tip: Refresh page if something doesn't work</div>
               <div>Tip: Be sure to add us to your bookmarks! Website can work as an app</div>
               <div>Did you know? All Content is automatically updated daily</div>
               
               <div>Clicking the indigo heart button will add the like to your den.</div>
               <div className='memeVid'>Videos where you can only pause and play(Usually tiktok) Tip: pause and unpause if video  and audio doesn't match </div>
               <div className='memeGFY'>Videos with more options(GFY Videos) Tip: wait a bit before playing video </div>
               <div className='memePic'>Simple Gifs or Pics</div>
               </span>
            </div>
         </li>
        
       </ul>

         </div>

         <div className='row'>

             <div className='col s12 offset-m1 m4 offset-l1 l4'>
                <img className='responsive-img' src={looking} alt='looking'/>
             </div>
             <div className='col s12  offset-m1 m4 offset-l1 l5'>
             
            <h3>Look up a friend's username and see their profile</h3>
            <div className='input-field'>
                   <input  onChange={(e)=>{setLookup(e.target.value)}} id="profile" type="text" className="validate"/>
                   <label htmlFor="profile">Look up profile</label>
                   <button className="waves-effect waves-light btn round indigo lighten-3" onClick={()=>{
                                            if(lookup !== ''){
                                             props.history.push(`/den/${lookup}`)
                                            }
                                            }}>LookUp</button>
            </div>
            </div>
         </div>

         <div className='row'>
            
         <div className='col s12  offset-m1 m4 offset-l1 l5'>
             
             <h3>Look for content within the badger's den. Who knows, you might find something cool</h3>
             <h3>Remember, you can only look up one word at a time</h3>
             <div className='input-field'>
                    <input  onChange={(e)=>{setLookup(e.target.value)}} id="content" type="text" className="validate"/>
                    <label htmlFor="content">Look for Content(ex:'pewdiepie', 'mildlyinteresting')</label>
                    <button className="waves-effect waves-light btn round indigo lighten-3" onClick={()=>{
                                             if(lookup !== ''){
                                              props.history.push(`/memes/${lookup}`)
                                             }
                                             }}>Search!</button>
             </div>
             </div>
             <div className='col s12 offset-m1 m4 offset-l1 l4'>
                <img className='responsive-img' src={pusheen} alt='looking'/>
             </div>
             
         </div>
         

        </div>
        <div className='space'></div>
         <div className='space'></div>
             <div className='space'></div>
        </>
           )
}