import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter , setCounter]  = useState(0)  //we can werite any things inthe setcounter 

  //let counter = 0;
  const addValue =() => {
    console.log('add value',counter);
   // counter = counter +1;
    setCounter(counter +1 )  //setcounte name should be same as the above


  }

  const removevalue =()  => {  
    setCounter(counter -1);

  }

  return (
    <>

    <h1>bicky chia's</h1>
    <h2>counter value: {counter} </h2>
    <br/>
    <button onClick={addValue}>Add value </button>
    <br/> 
    <button onClick={removevalue}>remove value {counter}</button>
    <br/> 
    <p>footer: {counter}</p>


    </>
  )
}

export default App
