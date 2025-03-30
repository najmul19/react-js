import { useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";

function App() {
  const [watchs, setWatches]=useState([])
  // const wathches = [
  //   { id: 1, name: "apple", price: 1000 },
  //   { id: 2, name: "sam", price: 1000 },
  //   { id: 3, name: "mi", price: 1000 },
  //   { id: 4, name: "poc", price: 1000 },
  // ];

  useState( () =>{
    fetch('watches.json')
    .then(res=> res.json())
    .then(data=>setWatches(data))
  } , [])

  return (
    <>
      <h1>Vite + React</h1>
      {watchs.map((watch) => (
        <Watch watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
