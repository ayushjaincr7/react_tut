import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () =>{
    if( counter<=19){
      setCounter(counter+1)
    }
   
  }
  const delValue = () =>{
    if( counter>0){
      setCounter(counter-1)
    }
    
  }


  return (
    <>
    <h1>REACT</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={delValue}>Remove value</button>
    </>
  )
}

export default App
