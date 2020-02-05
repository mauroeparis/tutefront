import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";

import BookCover from './bookCover';
import AddBookModal from './addBookModal';
import TokenContext from "../TokenContext";
import { GalleryButton } from './galleryFilter';
import { ReactComponent as PlusLogo } from '../icons/plus.svg';
import { ReactComponent as TrashLogo } from '../icons/trash.svg';
import { ReactComponent as CrossLogo } from '../icons/cross.svg';
import api from '../Api';


function Gallery() {
  const [books, setBooks] = useState([]);
  const [disabled, showAddBookModal] = useState(true);
  const [deleteMode, setDeleteMode] = useState(false);
  const [deletedBooks, setDeletedBooks] = useState([]);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    api.books.all()
    .then(res => {
      setBooks(res.data.objects);
    });
  }, []);

  const deleteBooks = () => {
    api.books.delMul(deletedBooks, token)
      .then((res) => setBooks(
        books.filter(b => !deletedBooks.includes(b.id))
      ))
      .catch((res) => console.log(res))
    setDeleteMode(false);
    setDeletedBooks([]);
  };

  const handleBookSelect = (bookId) => {
    if (deletedBooks.includes(bookId)) {
      for( var i = 0; i < deletedBooks.length; i++) {
        if (deletedBooks[i] === bookId) {
          deletedBooks.splice(i, 1);
          setDeletedBooks([deletedBooks].flat());
        }
      }
    } else {
      setDeletedBooks([deletedBooks, bookId].flat());
    }
  };

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
      <div className="flex justify-end pb-1">
        {token.token ? <div className="flex flex-wrap">
          <GalleryButton
            label={<PlusLogo className="w-6 h-6" />}
            func={() => { showAddBookModal(false) }}
          />
          {deleteMode ?
            <div className="flex flex-wrap">
              <GalleryButton
                label={<TrashLogo className="w-6 h-6" />}
                func={() => { deleteBooks() }}
                />
              <GalleryButton
                label={<CrossLogo className="w-6 h-6" />}
                func={() => { setDeleteMode(false); setDeletedBooks([]); }}
                />
            </div>
          :
            <GalleryButton
              label={<TrashLogo className="w-6 h-6" />}
              func={() => { setDeleteMode(true) }}
            />
          }
        </div> : ""}

      </div>
      <div className="flex flex-wrap">
        {books.map((book) => {
          return (
            <div className="m-3" key={book.id}>
              {deleteMode ?
                <div
                  className={
                    deletedBooks.includes(book.id) ? "opacity-50" : ""
                  }
                  onClick={ () => handleBookSelect(book.id) }
                >
                  <BookCover
                    name={book.name}
                    src={book.photos[0].url}
                  />
                </div>
              :
                <Link to={`book/${book.id}`}>
                  <BookCover
                    name={book.name}
                    src={book.photos[0].url}
                  />
                </Link>
              }

            </div>
          )
        })}
      </div>

      <AddBookModal
        showModal={showAddBookModal}
        books={books}
        setBooks={setBooks}
        disabled={disabled}
      />
    </div>
  );
}

export default Gallery;
