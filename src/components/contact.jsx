import React from "react";
import { ReactComponent as ChatIcon } from '../icons/chat.svg';

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
            <input
              className="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border
              border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
              "
              type="text"
              placeholder="Nombre"
              />
          </div>
          <div className="w-full mt-3">
            <input
              className="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border
              border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
              "
              type="text"
              placeholder="Teléfono"
              />
          </div>
          <div className="w-full mt-3">
            <input
              className="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border
              border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
              "
              type="email"
              placeholder="E-mail"
              />
          </div>
          <div className="w-full mt-3">
            <textarea
              className="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border
              border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
              "
              placeholder="Hola Mateo! ..."
              rows="4"
            />
          </div>
          <div className="w-full mt-3">
            <button
              className="
                appearance-none
                block
                w-full
                bg-blue-200
                text-blue-800
                border
                border-blue-200
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none
                hover:bg-blue-300
                hover:text-blue-900
                focus:border-blue-500
              "
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
