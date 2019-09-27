import React from 'react'
import construction from '../../assets/construction.gif'

const Todos = props => {
return (
  <div className="todos container center-align">
    <div className='space'></div>
    <div className='space'></div>
    <div className='space'></div>
  <h1 className='center-align'>Under Construction</h1>

  <img className='responsive-img round' src={construction} alt='under construction'/>
 
  </div>
)
}

export default Todos;
