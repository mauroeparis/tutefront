import React from 'react';

function Gallery(props) {
  return (
    <div className="w-full p-2 self-center">
      <div className="flex flex-row rounded-lg">
        <div
          className="
            group
            relative
            w-full
            h-full
            shadow-md
            rounded-lg
            cursor-pointer
          "
        >
          <img
           src={props.imgUrl}
           className="w-full shadow-base rounded-lg" alt="album cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
