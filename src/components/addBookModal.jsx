import React, { useState, useContext } from "react";

import { ReactComponent as IconCross } from '../icons/cross.svg';
import { ReactComponent as IconPlus } from '../icons/plus.svg';
import { ReactComponent as IconLink } from '../icons/link.svg';
import { ReactComponent as IconCaretDown } from '../icons/caret-down.svg';
import { ReactComponent as IconBook } from '../icons/book.svg';
import TokenContext from "../TokenContext";
import api from '../Api';

function AddBookModal({ showModal, disabled, buttonClasses }) {
  const { token } = useContext(TokenContext);

  const baseInputClasses = `
    appearance-none
    text-gray-700 border-gray-200
    block
    bg-gray-200
    border-2  rounded
    py-3 px-4
    leading-tight
    focus:outline-none
  `;
  const inputFocusClases = `
    focus:bg-white
    focus:border-gray-500
  `;

  const [urls, setUrls] = useState([""]);
  const [name, setName] = useState();
  const [tag, setTag] = useState("portrait");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUrls([urls, ""].flat());
    }
  };

  const handleUrlChange = (e, index) => {
    const newUrls = [...urls];
    newUrls[index] = e.target.value;
    setUrls(newUrls);
  };

  const handleUrlRemove = (e, index) => {
    const newUrls = [...urls];
    newUrls.splice(index, 1);
    setUrls(newUrls);
  }

  const handleSubmit = () => {
    const photos = urls.map(url => {return {"url": url}});
    api.books.add({name, tag, photos}).then(res => {
      showModal({ disabled: true });
      setUrls([""])
      setName("");
      setTag("portrait");
    }).catch(
      res => console.log(res)
    );
  }

  return (
    <div
      className={`modal ${
        disabled
          ? "opacity-0 overflow-x-hidden overflow-y-visible pointer-events-none"
          : ""
      } fixed w-full h-full top-0 left-0 flex items-center justify-center`}
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
          bg-white
          w-11/12 md:max-w-md
          mx-auto z-50
          rounded shadow-lg
          overflow-y-auto
        "
      >

      <div className="modal-content flex flex-col py-4 text-left px-6">
        <div className="relative w-full mt-3">
          <input
            className={`${baseInputClasses} ${inputFocusClases} w-full pl-12`}
            type="text"
            name="name"
            onChange={(ev) => setName(ev.target.value)}
            placeholder="Nombre del Book"
          />
          <div
            className="
              pointer-events-none
              absolute inset-y-0 left-0
              flex items-center
              px-4 text-gray-600
            "
          >
            <IconBook className="w-5 h-5 fill-current"/>
          </div>
        </div>
        <div className="relative w-full mt-3">
          <select
            className={`${baseInputClasses} w-full pr-12`}
            type="text"
            name="tag"
            placeholder="Tipo"
            defaultValue={tag}
            onChange={(ev) => setTag(ev.target.value)}
          >
            <option value="portrait">Retrato</option>
            <option value="architecture">Estructura</option>
          </select>
          <div
            className="
              pointer-events-none
              absolute inset-y-0 right-0
              flex items-center
              px-4 text-gray-600
            "
          >
            <IconCaretDown className="w-6 h-6 fill-current"/>
          </div>
        </div>

        <div className="max-h-64 overflow-scroll">
          {
            urls.map(
              (elem, index) => { return (<div className="relative w-full mt-3" key={index}>
                <input
                  className={`${baseInputClasses} ${inputFocusClases} w-full pl-12`}
                  type="text"
                  placeholder="URL de foto"
                  value={elem}
                  onChange={(event) => handleUrlChange(event, index)}
                  onKeyDown={handleKeyDown}
                />
                <div
                  className="
                    flex items-center
                    absolute inset-y-0 left-0
                    pointer-events-none
                    text-gray-600 px-4
                  "
                >
                  <IconLink className="w-5 h-5 fill-current"/>
                </div>
                <button
                  className="
                    flex items-center
                    absolute inset-y-0 right-0
                    cursor-pointer
                    text-gray-600 px-4
                    focus:outline-none
                  "
                  onClick={(ev) => handleUrlRemove(ev, index)}
                >
                  <IconCross className="w-5 h-5 fill-current"/>
                </button>
              </div>) }
            )
          }
        </div>

        <div className="w-full mt-3">
          <button
            className={`
              ${baseInputClasses}
              w-full
              flex
              justify-center
              text-center
              text-indigo-500
              focus:outline-none
              hover:border-2
              hover:border-purple-200
              active:bg-gray-300
            `}
            onClick={() => setUrls([urls, ""].flat())}
          >
          <IconPlus className="w-4 h-4 fill-current" />
        </button>
        </div>

        <div className="flex justify-end pt-6">
          <button
            className={`
              ${baseInputClasses}
              w-auto
              text-center
              text-indigo-500
              focus:outline-none
              hover:border-2
              hover:border-purple-200
              active:bg-gray-300
              px-4
              mr-2
            `}
            onClick={() => showModal({ disabled: true })}
          >
            Cancelar
          </button>
          <button
            className="
              modal-close
              px-4
              bg-indigo-500
              p-3
              rounded-lg
              text-white
              hover:bg-indigo-400
              focus:outline-none
              active:bg-indigo-500
            "
            onClick={handleSubmit}
          >
            Agregar
          </button>
        </div>

      </div>
    </div>
    </div>
  );
}

export default AddBookModal;
