import React,  { useState, useEffect } from 'react'
import construction from '../../assets/construction.gif'

const Todos = props => {
return (
  <div className="todos container center-align">
  <h1 className='center-align'>Under Construction</h1>

  <img className='responsive-img round' src={construction} alt='under construction'/>
 
  </div>
)
}

export default Todos;
