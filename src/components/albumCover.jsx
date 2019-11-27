import React from 'react';

function AlbumCover(props) {
  return (
    <div className="p-2 cursor-pointer">
      <div className="flex flex-row rounded-lg">
        <div className="relative w-full h-full shadow-md rounded-lg">
          <img
           src={props.imgUrl}
           className="shadow-base rounded-lg" alt="album cover"
          />
        <div
          className="absolute inset-x-0 bottom-0 text-gray-100 font-mono p-3 rounded-b-lg"
          style={{backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), transparent)"}}>
          <h1 className="text-lg">
            {props.modelName}
          </h1>
          <span className="text-base">
            {props.date}
          </span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumCover;
