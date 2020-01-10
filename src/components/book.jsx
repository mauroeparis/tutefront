import React, {useState} from 'react';

import ImgModal from './imgModal';


function Book(props) {
  const [
    { disabled, index },
    showModal
  ] = useState({
    disabled: true,
    index: null
  });

  const images = [
    "https://pro2-bar-s3-cdn-cf2.myportfolio.com/02430f6d-af4e-45d1-9a86-bd4dd91db1f7/3f9ceacb-f91d-476e-ab94-dc6d40459d9a_rw_1920.jpg?h=7e7157750370c2315a2e9caf3ebe92b8",
    "https://pro2-bar-s3-cdn-cf2.myportfolio.com/02430f6d-af4e-45d1-9a86-bd4dd91db1f7/352b40f3-8539-40dc-aa48-f1d94a843434_rw_1920.jpg?h=8f5fa0c5f3c5a73752f09f5de8efeca6",
    "https://pro2-bar-s3-cdn-cf4.myportfolio.com/02430f6d-af4e-45d1-9a86-bd4dd91db1f7/5db41ff2-4079-4b60-9060-62e9b318b916_rw_1920.jpg?h=af5ae9975fc93060c2255e7bc5fbfa8b"
  ]

  return (
    <div className="flex flex-col lg:px-24">
      <h1
        className="
          font-thin tracking-widest uppercase font-raleway
          text-3xl self-center text-gray-800 pb-12
        "
      >
        {props.modelName || "sofia"}
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
