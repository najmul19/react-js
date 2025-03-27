import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Persion></Persion>
      <St></St>
      <Dev></Dev>
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="19"></Device>
    </>
  );
}

function Persion() {
  const age = 23;
  return <h3>I am a person with age: {age}</h3>;
}
function St() {
  return (
    <div className="student">
      <h3>Ok</h3>
      <p>Name</p>
      <p>Age</p>
    </div>
  );
}

function Device(props){
  console.log(props)
  return <h2>This device: {props.name} price: {props.price}</h2>
}
function Dev() {
  const devStyle = {
    border: "2px solid purple",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
  };
  return (
    <div style={devStyle}>
      <h5>Dev Dev</h5>
      <p>Hello</p>
    </div>
  );
}

export default App;
