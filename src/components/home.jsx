import React from 'react';
import { motion } from "framer-motion"

import AlbumCover from './albumCover';
import About from './about';
import Contact from './contact';

function Home(props) {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0, opacity: 1
    }
  };

  return (
    <div className="flex flex-col pb-24 xl:pb-64">
      <motion.div
        className="
        flex
        flex-col
        w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
        md:mx-auto
        "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div
          className="w-3/4 md:w-7/12 md:-mb-24 lg:w-9/12 lg:-mb-64"
          variants={item}
        >
          {
            <AlbumCover imgUrl={"/img/1.jpg"} />
          }
        </div>
        <div
          className="
          w-3/4 md:w-2/3 lg:w-1/2
          -mt-40 md:-mt-48
          -mb-6 lg:-mb-1
          self-end
          z-10
          "
          variants={item}
        >
          {
            <AlbumCover imgUrl={"/img/2.jpg"} />
          }
        </div>
        <div
          className="
          w-3/4 md:w-3/4 lg:w-7/12
          -mt-24 md:-mt-64
          lg:-mb-32
          md:ml-8
          z-20
          "
          variants={item}
        >
          {
            <AlbumCover imgUrl={"/img/3.jpg"} />
          }
        </div>

        <div
          className="
          w-full sm:w-3/4 md:w-2/3 lg:w-1/2
          sm:-mt-40 md:-mt-48 lg:-mt-64
          sm:-mb-64 lg:-mb-64
          self-end
          z-20
          "
          variants={item}
        >
          {
            <About id="contact"/>
          }
        </div>

        <div className="w-3/4 md:w-7/12 md:-mb-24 lg:w-9/12 lg:-mb-64">
          {
            <AlbumCover imgUrl={"/img/4.jpg"} />
          }
        </div>
        <div
          className="
          w-3/4 md:w-2/3 lg:w-1/2
          -mt-40 md:-mt-48
          sm:-mb-6 lg:-mb-1
          self-end
          z-10
          "
          variants={item}
        >
          {
            <AlbumCover imgUrl={"/img/5.jpg"} />
          }
        </div>
        <div
          className="
          w-full sm:w-3/4 md:w-3/4 lg:w-6/12
          sm:-mt-24 md:-mt-64
          lg:-mb-32
          md:ml-8
          z-20
          "
          variants={item}
        >
          {
            <Contact />
          }
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
