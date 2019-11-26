import React from 'react';

function AlbumWQuote(props) {
  return (
    <div className="p-2">
      <div className="flex flex-row">
        <div className="w-full h-full shadow-md rounded-lg">
          <img src={props.imgUrl} className="shadow-base rounded-lg" alt="exampleImg" />
        </div>
      </div>
    </div>
  );
}

export default AlbumWQuote;
