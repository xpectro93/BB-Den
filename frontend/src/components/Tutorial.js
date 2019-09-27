import React, {useState} from 'react'
import '../CSS/Meme.css'
import looking from '../assets/looking.gif'
import pusheen from '../assets/pusheen.gif'


export const Tutorial = props => {
    const [lookup, setLookup] = useState('')
   
    return (
        <div className='center-align tut'>
         <div className='space'></div>
         <div className='space'></div>

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
             <h3>Remember, you can only look up one word</h3>
             <div className='input-field'>
                    <input  onChange={(e)=>{setLookup(e.target.value)}} id="content" type="text" className="validate"/>
                    <label htmlFor="content">Look for Content(ex:'pusheen', 'pewdiepie', 'fortnite', 'cats', 'mildlyinteresting')</label>
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
           )
}