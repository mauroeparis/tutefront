import React from 'react';

import { ReactComponent as Plus } from '../icons/plus.svg';

function AlbumCover(props) {
  return (
    <div className="p-2">
      <div className="flex flex-row rounded-lg">
        <div className="relative w-full h-full shadow-md rounded-lg cursor-pointer">
          <img
           src={props.imgUrl}
           className="shadow-base rounded-lg" alt="album cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 text-gray-100 p-3 rounded-b-lg"
            style={{backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), transparent)"}}>
            <small className="font-thin">
              MODELO:
            </small>
            <h1 className="text-lg font-mono">
              {props.modelName}
            </h1>
            <span className="text-base font-hairline">
              {props.date}
            </span>
            <Plus className="absolute bottom-0 right-0 my-3 h-6 w-12"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumCover;
