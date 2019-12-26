import React, { useState } from 'react';

function GalleryFilter(props) {
  const [isFiltered, setFilter] = useState(true)

  return (
    <div
      className={`
        text-xs font-medium uppercase tracking-wider
        md:text-sm
        bg-purple-100
        rounded-lg
        ${isFiltered ? "text-indigo-500" : "text-indigo-300"}
        px-3 py-2 mx-2
        cursor-pointer
        select-none
      `}
      onClick={() => setFilter(!isFiltered)}
    >
      { props.label }
    </div>
  );
}

export default GalleryFilter;
