import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blog";
import Bookmarks from "./components/Bookmarks/Bookmarks";

import Header from "./components/Header/header";

function App() {
  const [bookmarks,setBookmarks]= useState([]);
  const [radingTIme, setradingTIme] = useState(0);

  const handleAddToBookmark=(blog)=>{
    // console.log('adding soon');
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAdRead = (time)=>{
    // console.log('marking ad read: ', time)
    setradingTIme(radingTIme+time)
  }

  return (
    <>
      
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs 
        handleMarkAdRead={handleMarkAdRead}
        handleAddToBookmark={handleAddToBookmark} ></Blogs>
        <Bookmarks
        bookmarks={bookmarks}
        radingTIme={radingTIme}
        ></Bookmarks>
      </div>
    </>
  );
}

export default App;
