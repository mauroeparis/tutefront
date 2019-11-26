import React from 'react';

import AlbumWQuote from './components/albumWQuote';
import { ReactComponent as InstaLogo } from './icons/instagram.svg';
import { ReactComponent as Dots } from './icons/dots.svg';

function App() {
  return (
    <div className="App">
      <div>
        <div className="flex flex-row justify-between p-3 text-gray-900 bg-transparent">
          <div className="w-4/5">
            <div className="pl-2 flex text-xl font-medium tracking-wide uppercase items-center font-raleway">
              Mateo Diaz
            </div>
            <div>
              <AlbumWQuote imgUrl="https://www.instagram.com/p/B25MzQYj-on/media" />
              <AlbumWQuote imgUrl="https://www.instagram.com/p/B0PM7sVDNHR/media" />
            </div>
          </div>
          <div className="fixed top-0 right-0 pt-4 pr-1">
            <div className="flex flex-row">
              <a href="https://www.instagram.com/matuteph/">
                <InstaLogo className="px-3 h-6 w-12"/>
              </a>
              <Dots className="px-3 h-6 w-8"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
