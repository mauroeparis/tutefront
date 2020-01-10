import React, { useState, useEffect } from "react";

import { ReactComponent as IconRight } from '../icons/chevron-right.svg';
import { ReactComponent as IconLeft } from '../icons/chevron-left.svg';
import { ReactComponent as IconCross } from '../icons/cross.svg';

function ImgModal({ showModal, disabled, index, images }) {

  const [{ inx }, setImage] = useState({inx: index});

  useEffect(() => {
    setImage({inx:index});
  }, [index]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      nextIndex();
    }
    if (event.key === "ArrowLeft") {
      prevIndex();
    }
  }

  const imagesLength = images.length;

  const prevIndex = () => {
    setImage({
      inx: (((inx - 1) % imagesLength) + imagesLength) % imagesLength,
      prev: (((inx - 2) % imagesLength) + imagesLength) % imagesLength,
      next: inx
    })
  }

  const nextIndex = () => {
    setImage({
      inx: (inx + 1) % imagesLength,
      prev: inx,
      next: (inx + 2) % imagesLength
    })
  }

  const modalButtons = `
    flex
    p-3 sm:p-6 md:p-8 lg:p-12
    h-full
    justify-center items-center
    opacity-75 hover:opacity-100
    focus:border-0 focus:outline-none
  `;

  return (
    <div
      className={`modal ${
        disabled
          ? "opacity-0 overflow-x-hidden overflow-y-visible pointer-events-none"
          : ""
      } fixed w-full h-full top-0 left-0 flex items-center justify-center`}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <div
        className="absolute w-full h-full bg-gray-900 opacity-50"
        onClick={() => showModal({ disabled: true })}
      />

      <div
        className="
          modal-close absolute
          top-0 right-0 z-50
          cursor-pointer
          flex flex-col
          items-center
          mt-4 mr-4
          text-white text-sm
        "
      >
        <IconCross
          className="w-8 h-8 text-white opacity-75 hover:opacity-100"
          onClick={() => showModal({ disabled: true })}
        />
      </div>

      <div
        className="
          flex flex-row
          items-center
          text-left font-sans
          bg-transparent
          mx-auto
          rounded
          z-50
          w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12
        "
      >
        <button
          className={modalButtons}
          onClick={prevIndex}
        >
          <IconLeft className="w-8 h-8 text-white" />
        </button>
        <div
          className="rounded shadow overflow-visible"
        >
          <img
            className="object-scale-down rounded shadow table"
            src={images[inx]}
            alt="photobook cover"
          />
        </div>
        <button
          className={modalButtons}
          onClick={nextIndex}
        >
          <IconRight className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
}

export default ImgModal;
