import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, radingTIme }) => {
  return (
    <div className="md:w-1/3 ">
      {/* className="md:w-1/3  bg-gray-300 ml-4 mt-4" */}
      <div className="bg-purple-300 ml-4 mt-4 rounded-lg p-2 border-b-2 border-b-gray-800">
        <h3 className="text-4xl ">Rading Time: {radingTIme} </h3>
      </div>
      <div className="bg-gray-300 ml-4 mt-4">
        <h2 className="text-3xl text-center">
          Bookmarked Blogs: {bookmarks.length}{" "}
        </h2>
        {bookmarks.map((bok, indx) => (
          <Bookmark key={indx} bookmark={bok}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
