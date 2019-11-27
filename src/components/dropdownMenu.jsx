import React, { useState } from 'react';

import { ReactComponent as Dots } from '../icons/dots.svg';
import { ReactComponent as IdCard } from '../icons/idCard.svg';

function DropdownMenu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsActive(!isActive)}
        className="cursor-pointer"
      >
        <Dots className="px-3 h-6 w-8"/>
      </button>

      <div
        className={`fixed inset-0 ${isActive ? '' : 'hidden'}`}
        onClick={() => setIsActive(!isActive)}
        tabindex="-1">
      </div>

      <div
        className={`
          mt-2 absolute right-0 text-left
          ${isActive ? '' : 'hidden'}`}
      >
        <div className="w-64 bg-gray-100 rounded-lg shadow-lg">
          <div className="rounded-t-lg">
            <a
              href="#.com"
              className="block px-6 py-3 leading-tight hover:bg-gray-200 rounded-t-lg"
            >
              Ver Books
            </a>
            <a
              href="#.com"
              className="
                block px-6 py-3 leading-tight hover:bg-gray-200"
            >
              Ver Estructuras
            </a>
            <a
              href="#.com"
              className="block px-6 py-3 leading-tight hover:bg-gray-200"
            >
              Sobre Mi
            </a>
            <a
              href="#.com"
              className="
                block px-6 py-3 leading-tight
                bg-blue-200 hover:bg-blue-300
                text-blue-700 hover:text-blue-800
                rounded-b-lg"
            >
              <div className="flex flex-row items-center">
                Contacto
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
