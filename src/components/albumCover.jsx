import React from 'react';
import { motion } from "framer-motion"

function AlbumCover(props) {
  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0, opacity: 1
    }
  }

  return (
    <motion.div className="w-full p-2 self-center" variants={item}>
      <div className="flex flex-row rounded-lg">
        <div
          className="
            group
            relative
            w-full
            h-full
            shadow-md
            rounded-lg
          "
        >
          <img
            src={props.imgUrl}
            className="w-full shadow-base rounded-lg" alt="album cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default AlbumCover;
