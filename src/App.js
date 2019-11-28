import React from "react";

import Home from './components/home';
import DropdownMenu from './components/dropdownMenu';
import { ReactComponent as InstaLogo } from './icons/instagram.svg';

function App() {
  return (
    <div className="App">
      <div>
        <div className="flex flex-row justify-between p-3 text-gray-900 bg-transparent">
          <div className="w-4/5">
            <div className="pl-2 py-2 flex text-xl font-medium tracking-wide uppercase items-center font-raleway">
              Mateo Diaz.
            </div>

            <Home />

          </div>
          <div className="fixed top-0 right-0 pt-6 pr-1">
            <div className="flex flex-row  bg-white">
              <a href="https://www.instagram.com/matuteph/">
                <InstaLogo className="px-3 h-6 w-12"/>
              </a>
              <DropdownMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
