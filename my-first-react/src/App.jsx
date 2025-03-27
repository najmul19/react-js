import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Persion></Persion>
      <Persion></Persion>
      <Persion></Persion>
      <Persion></Persion>
      
    </>
  )
}

function Persion(){
  const age = 23;
  return <h3>I am a person with age: {age}</h3>
}
function St(){
  return (
    <div>
      <h3>Ok</h3>
      <p>Name</p>
      <p>Age</p>
    </div>
  )
}

export default App
