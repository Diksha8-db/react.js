import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   let [counter,setCounter] = useState(1);

  // let counter = 1;
  
  // value should not exceed 20
  function addValue(){
    console.log(counter);
    // counter++;
    if(counter > 0 && counter < 20){
      setCounter(counter + 1);
    }
  }

  // value should not be negative
  function removeVal(){
    if(counter > 0){
      counter = counter - 1;
      setCounter(counter);
    }
    else{
      counter =0;
    }
    
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value : {counter}</button>
      <br/>
      <br/>
      <button onClick={removeVal}>Remove Value : {counter}</button>
    </>
  )
}

export default App
