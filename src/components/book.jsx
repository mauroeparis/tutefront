import React from 'react';

function Book(props) {
  return (
    <div className="flex flex-col overflow-hidden m-3 max-w-xs lg:max-w-sm">
      <img
        src={props.src}
        alt={`${props.name + " photobook cover"}`}
        className="rounded-lg shadow-md"
      />
      <div
        className="
          flex
          bg-white border-gray-200 border-2 rounded-lg shadow-lg mb-6
          w-1/2 h-12 -mt-6 z-10
          justify-center items-center self-center
        "
      >
        <span className="font-raleway text-gray-900">Sofia</span>
      </div>
    </div>
  );
}

export default Book;
