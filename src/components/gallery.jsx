import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";

import BookCover from './bookCover';
import AddBookModal from './addBookModal';
import TokenContext from "../TokenContext";
import { GalleryFilter, GalleryButton } from './galleryFilter';
import api from '../Api';


function Gallery() {
  const [books, setBooks] = useState([]);
  const [disabled, showModal] = useState(true);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    api.books.all()
    .then(res => {
      setBooks(res.data.objects);
    })
  }, []);

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
      <div className="flex justify-between pb-1">
        <div className="flex flex-wrap">
          <GalleryFilter label="Retratos" />
          <GalleryFilter label="Estructuras" />
          <GalleryFilter label="Variadas" />
        </div>
        {token ? <div className="flex flex-wrap">
          <GalleryButton label="agregar book" func={() => { showModal(false) }}/>
        </div> : ""}

      </div>
      <div className="flex flex-wrap">
        {books.map((book) => {
          return (
            <div className="m-3" key={book.id}>
              <Link to={`book/${book.id}`}>
                <BookCover
                  name={book.name}
                  src={book.photos[0].url}
                />
              </Link>
            </div>
          )
        })}
      </div>

      <AddBookModal showModal={showModal} disabled={disabled} />
    </div>
  );
}

export default Gallery;
