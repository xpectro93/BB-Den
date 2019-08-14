import React, { useState } from 'react';

const Hooks = props => {
  //userState returns an array that has two elements, first = current state , second = updated state

  //First way to look at it, but on line 17 is a simplified way to look at it so we dont have to spread operate state
  // const [state, setState] = useState({
  //BEFORE
  // state = {
  //   name:'Jon',
  //   age:26,
  //   isTired:true
  // }
  // })


  //HOOKS
  const [name, setName ] = useState('Jon');
  const [age, setAge ] = useState(26);
  const [ isTired, setIsTired ] = useState(true)

  const handleChange = e => {
    //BEFORE
    // this.setState({
    //   [e.target.id] : e.target.value
    // })
    //HOOKS if using old state architecture
    // setState({
    //   ...state, [e.target.id] : e.target.value
    // })


    //OTHER WAY
    setName(e.target.value)


  }

// EX this.state.userInput <- BEFORE
//     state.userInput <-HOOKS
//     name
// OR this.handleChange() <-BEFORE
//         handleChange() <- HOOKS
//
return (
  <>
  <div>
<h1>{name}</h1>
<input onChange={handleChange}/>
  </div>
  </>
)
}
export default Hooks;
