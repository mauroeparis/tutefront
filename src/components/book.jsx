import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import ImgModal from './imgModal';
import api from '../Api';

function Book() {
  const [
    { disabled, index },
    showModal
  ] = useState({
    disabled: true,
    index: null
  });

  const { id } = useParams();
  const [images, setImages] = useState([])
  const [modelName, setModelName] = useState()

  useEffect(() => {
    api.books.get(id)
    .then(res => {
      const book = res.data;
      setModelName(book.name)
      const images = book.photos.map(photo => photo.url).filter(url => url)
      setImages(images);
    });
  }, [id]);

  return (
    <div className="flex flex-col lg:px-24">
      <h1
        className="
          font-thin tracking-widest uppercase font-raleway
          text-3xl self-center text-gray-800 pb-12
        "
      >
        {modelName || ""}
      </h1>
      <div className="flex flex-wrap self-center w-8/12 pb-24 justify-center">
        {images.map((src, key) => {
          return (
            <img
              key={key}
              className="w-32 h-32 m-1 cursor-pointer object-cover rounded"
              src={src}
              alt="photobook cover"
              onClick={
                () => {
                  showModal({
                    disabled:false, index:key
                  })
                }
              }
            />
          )
        })}
      </div>

      <ImgModal showModal={showModal} disabled={disabled} index={index} images={images} />
    </div>

  );
}

export default Book;