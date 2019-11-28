import React from "react";

import DropdownMenu from './dropdownMenu';
import { ReactComponent as InstaLogo } from '../icons/instagram.svg';

function Navbar() {
  return (
    <div
      className="
        flex flex-row justify-between p-3 text-gray-900 bg-transparent
        max-w-5xl mx-auto
      "
    >
      <div
        className="w-4/5 self-center"
      >
        <div
          className="
            pl-2 py-2 text-xl font-medium
            tracking-wide uppercase font-raleway
          "
        >
          Mateo Diaz.
        </div>

      </div>
      <div className="flex flex-row bg-white py-2 pr-1">
        <a className="self-center" href="https://www.instagram.com/matuteph/">
          <InstaLogo className="px-3 h-6 w-12"/>
        </a>
        <DropdownMenu />
      </div>
    </div>
  );
}

export default Navbar;
