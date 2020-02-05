import React from "react";

import { ReactComponent as ChatIcon } from '../icons/chat.svg';
import { ReactComponent as InstaLogo } from '../icons/instagram.svg';
import { ReactComponent as WppLogo } from '../icons/whatsapp.svg';


function About() {
  return (
    <div
      className="
        self-center
        bg-white
        sm:border-gray-200
        sm:shadow-lg
        sm:border-2
        rounded-lg
      "
    >
      <div
        className="
          flex
          flex-col
          justify-center
          py-6 md:pt-0
          px-3
        "
      >
        <div
          className="
            flex
            justify-center
            align-center
            self-center
            pb-6
            rounded-full
            border-4
            border-white
            h-24
            w-24
            bg-blue-200
            sm:-mt-12
          "
        >
          <ChatIcon
            className="self-center w-16 h-16 text-blue-800 fill-current mt-5"
          />
        </div>
        <div>
          <h1
            className="
              pl-2 py-2 text-xl font-medium
              tracking-wide uppercase font-raleway
              text-center text-gray-900
            "
          >
            Estemos en contacto
          </h1>
          <div className="w-full mt-3">
            <a
              href="https://www.instagram.com/matuteph/"
              className="
                appearance-none
                flex justify-center
                w-full py-3 px-4
                bg-blue-200
                text-blue-800 leading-tight
                border border-blue-200 rounded
                focus:outline-none
                hover:bg-blue-300
                hover:text-blue-900
                focus:border-blue-500
              "
            >
              <InstaLogo className="px-3 h-12 w-16"/>
              <p className="self-center font-semibold">
                MATUTEPH
              </p>
            </a>
          </div>
          <div className="w-full mt-3">
            <a
              href="https://api.whatsapp.com/send?phone=+5493512016383"
              className="
                appearance-none
                flex justify-center
                w-full py-3 px-4
                bg-green-200
                text-green-800 leading-tight
                border border-blue-200 rounded
                focus:outline-none
                hover:bg-green-300
                hover:text-green-900
                focus:border-green-500
              "
            >
              <WppLogo className="px-3 h-12 w-16"/>
              <p className="self-center font-semibold">
                +54 9 351 2016383
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
