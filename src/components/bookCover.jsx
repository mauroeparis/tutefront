import React from 'react';

function BookCover({ src, name }) {
  return (
    <div
      className="
        flex flex-col overflow-visible
        max-w-xs lg:max-w-64 cursor-pointer
      "
    >
      <img
        src={src}
        alt={`${name + " photobook cover"}`}
        className="rounded-lg shadow-md h-64 w-64 object-cover"
      />
      <div
        className="
          flex
          bg-white border-gray-200 border-2 rounded-lg shadow-lg
          w-1/2 h-12 -mt-6
          justify-center items-center self-center
          overflow-visible
        "
      >
        <span className="font-raleway text-gray-900">{name}</span>
      </div>
    </div>
  );
}

export default BookCover;
