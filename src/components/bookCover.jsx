import React, { useRef, useState, useEffect } from 'react';
import { Image, Transformation } from 'cloudinary-react';

function BookCover({ src, name }) {
  const ref = useRef(null);
  const [dimentions, setDimentions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    const height = ref.current ? ref.current.offsetHeight : 0;
    setDimentions({ width, height });
  }, []);

  return (
    <div
      ref={ref}
      className="
        flex flex-col overflow-visible
        h-64 w-64 cursor-pointer m-2
      "
    >
      <Image
        className="rounded-lg"
        cloudName="dlm0t8wgy"
        publicId={src}
        width={dimentions.width}
        height={dimentions.height}
        type="fetch"
      >
        <Transformation
          height={dimentions.height}
          width={dimentions.width}
          fetchFormat="auto"
          crop="fill"
        />
      </Image>
      <div
        className="
          flex
          bg-white border-gray-200 border-2 rounded-lg shadow-lg
          w-1/2 h-12 -mt-6
          justify-center items-center self-center
          overflow-visible
        "
      >
        <span className="font-raleway text-gray-900 py-3">{name}</span>
      </div>
    </div>
  );
}

export default BookCover;
