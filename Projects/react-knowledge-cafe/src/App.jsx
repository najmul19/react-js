import "./App.css";
import Blogs from "./components/Blogs/Blog";
import Bookmarks from "./components/Bookmarks/Bookmarks";

import Header from "./components/Header/header";

function App() {
  return (
    <>
      
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
