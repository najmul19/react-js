import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blog";
import Bookmarks from "./components/Bookmarks/Bookmarks";

import Header from "./components/Header/header";

function App() {
  const [bookmarks,setBookmarks]= useState([]);
  const handleAddToBookmark=(blog)=>{
    console.log('adding soon');
  }
  return (
    <>
      
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} ></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
