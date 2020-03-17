import React, { useRef, useState, useEffect } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { motion } from "framer-motion"

function AlbumCover(props) {
  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0, opacity: 1
    }
  }
  const ref = useRef(null);
  const [dimentions, setDimentions] = useState({width: 0, height: 0})

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    const height = ref.current ? ref.current.offsetHeight : 0;
    setDimentions({ width, height});    
  }, []);

  return (
    <motion.div className="w-full p-2 self-center" variants={item}>
      <div className="flex flex-row rounded-lg">
        <div
          ref={ref}
          className="
            group
            relative
            w-full
            h-full
            shadow-md
            rounded-lg
          "
        >
          <Image
            className="rounded-lg"
            cloudName="dlm0t8wgy"
            publicId={props.imgUrl}
            width={dimentions.width}
            height={dimentions.height}
          >
            <Transformation
              width={dimentions.width}
              fetchFormat="auto"
              crop="scale"
            />
          </Image>
        </div>
      </div>
    </motion.div>
  );
}

export default AlbumCover;
