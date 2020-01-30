import React, { useState } from 'react';

const baseClasses = `
  text-xs font-medium uppercase tracking-wider
  md:text-sm
  bg-purple-100
  border-2 rounded-lg border-purple-100
  px-3 py-2 mx-2
  cursor-pointer
  select-none
`;

const buttonClasses = `
  text-indigo-500
  focus:outline-none
  hover:border-2
  hover:border-purple-200
`;

export function GalleryFilter({ label }) {
  const [isFiltered, setFilter] = useState(true);

  return (
    <div
      className={`
        ${baseClasses}
        ${isFiltered ? "text-indigo-500" : "text-indigo-300"}
      `}
      onClick={() => setFilter(!isFiltered)}
    >
      { label }
    </div>
  );
}

export function GalleryButton({ label, func }) {

  return (
    <div
      className={`
        ${baseClasses}
        ${buttonClasses}
      `}
      onClick={func}
    >
      { label }
    </div>
  );
}
