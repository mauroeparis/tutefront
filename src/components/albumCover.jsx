import React from 'react';

import { ReactComponent as Plus } from '../icons/plus.svg';

function AlbumCover(props) {
  return (
    <div className="max-w-xs p-2">
      <div className="flex flex-row rounded-lg">
        <div className="group relative w-full h-full shadow-md rounded-lg cursor-pointer">
          <img
           src={props.imgUrl}
           className="shadow-base rounded-lg" alt="album cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 text-gray-100 p-3 rounded-b-lg text-center lg:hidden lg:group-hover:block"
            style={{backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), transparent)"}}>
            <small className="text-xs font-hairline">
              MODELO
            </small>
            <h1 className="text-sm font-mono">
              {props.modelName}
            </h1>
            <span className="text-xs font-hairline">
              {props.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumCover;
