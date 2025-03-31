
import {useState, useEffect} from "react"
const Blog = () => {
    const [blogs,setBlogs]= useState([])
    useEffect(()=>{
        fetch('blogs.json'
            .then(res=> res.json())
            .then(data=> setBlogs(data))
        )
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Blog;