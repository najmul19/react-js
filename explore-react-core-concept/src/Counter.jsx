import { useState } from "react";

export default function C0unter() {
  const [count, setCount] = useState(0)
//   console.log()

const handleAdd=()=>{
    const newCount =count+1;
    setCount(newCount);
}
const handleReduce=()=>{
    const newCount=count-1;
    setCount(newCount)
}
  return (
    <div style={{border: '2px solid tomato'}}>
    
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Sub</button>
    </div>
  );
}
