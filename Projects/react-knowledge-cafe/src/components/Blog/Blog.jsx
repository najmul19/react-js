import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAdRead}) => {
    // console.log(blog)
    const {id, title, cover, reading_time, author_img, author, posted_date,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex' >
                    <img className='w-14' src={author_img} alt="" />
                    <div className=' ml-6'>
                        <h3 className='text-2xl '>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button
                     onClick={()=>{handleAddToBookmark(blog)}}
                    
                    className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl '>{title}</h2>
            <p>{hashtags.map((hash, indx)=> <span key={indx}><a href="">#{hash}</a> </span> )}</p>
            <button className='text-purple-600 font-bold underline'
            onClick={()=>{handleMarkAdRead( reading_time, id)}}
            >Mark As Read</button>
        </div>
    );
};

export default Blog;