import React, {useState} from 'react'
import '../CSS/Meme.css'


export const Tutorial = props => {
    const [lookup, setLookup] = useState('')
    console.log('props at tutorial',props)
   
    return (
        <div className='center-align tut'>

         <div className='row'>
             <div className='col s12 offset-m1 m4 offset-l1 l4 indigo lighten 3'>
                <p>another test</p>
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

        </div>
           )
}