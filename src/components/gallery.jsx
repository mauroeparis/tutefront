import React from 'react';

import Book from './book';
import BookCover from '../img/bookCover.png';



function Gallery(props) {
  return (
    <div className="flex flex-col lg:px-24">
      <h1
        className="
          font-thin tracking-widest uppercase font-raleway
          text-3xl self-center text-gray-800 pb-12
        "
      >
        Books
      </h1>
      <div className="flex flex-wrap justify-around">
        <Book src={BookCover}/>
        <Book src={BookCover}/>
        <Book src={BookCover}/>
        <Book src={BookCover}/>
      </div>
    </div>
  );
}

export default Gallery;
