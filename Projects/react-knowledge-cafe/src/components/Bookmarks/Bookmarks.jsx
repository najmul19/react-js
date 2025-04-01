import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,radingTIme}) => {
    return (
        <div className="md:w-1/3  bg-gray-300 ml-4 mt-4">
            <div>
                <h3 className="text-4xl">Rading Time: {radingTIme} </h3>
            </div>
            <h2 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map((bok,indx)=> <Bookmark key={indx} bookmark={bok} ></Bookmark> )
            }
        </div>
    );
};

export default Bookmarks;