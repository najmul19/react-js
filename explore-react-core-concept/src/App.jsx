import C0unter from './Counter'

import './App.css'
import Team from './Team'
import Users from './Users'


function App() {
  function handleClick(){
    alert("button CLicked")
  }
  const handleClick2=()=>{
    alert("button2 CLicked")
  }
  const addFive=(num)=>{
    alert(num+5)
  }
 
  return (
    <>
      
      <h1>React Core COncept</h1>
      <Users></Users>
      <Team></Team>
      <C0unter></C0unter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={()=>alert("clicked third")}>Click Me3</button>
      <button onClick={()=>addFive(5)}>Buton-4</button>
    </>
  )
}

export default App
