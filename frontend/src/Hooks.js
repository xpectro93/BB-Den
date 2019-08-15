import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Hooks = props => {

  //***userState*** returns an array that has two elements, first = current state , second = updated state
  //***useEffect*** <- handles like componentDidMount, uses
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
  const [ isTired, setIsTired ] = useState(false)

  const fetching = () => axios.get('/api/users/isLoggedIn').then(resp => resp.data.id === null ? setName('It Worked'):setName('It didnt'))


  //**componentDidMount**It takes a function that will run right after the DOM has been rendered
  useEffect(() => {
    fetching()
  }, [])

  //**componentDidUpdate** second argument [], tells it to execute whenever w/e [] changes,replaces if there is a second argument to the function
  // useEffect(() => {
  // },['if w/e is in here changes, it updates'])

  //**componentWillUnmount if useEffect returns something, it will run after the first time that it runs and everytime before it runs again
  // useEffect(() => {
  //   return () => { 'w/e is in here this effect runs for the second time'}
  // },['w/e here will run after the return function on line above. IF empty line above will run only when component unmounts'])
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
console.log(name)
return (
  <>
  <div>
<h1>{name}</h1>
<input onChange={handleChange}/>
  </div>
  </>
)
}
// Adding React.memo will help it with unnecessary re-renders, such as props being same but a setInterval re-renders.
//export default React.memo(Hooks);
export default Hooks;
