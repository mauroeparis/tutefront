import React, { useState, useEffect } from "react";
import axios from 'axios';

import AlbumCover from './components/albumCover';
import DropdownMenu from './components/dropdownMenu';
import { ReactComponent as InstaLogo } from './icons/instagram.svg';

function App() {
  const [covers, setCovers] = useState();

  useEffect(() => {
    const getCovers = async () => {
      const result = await await axios(
      'http://localhost:5000/',
    );
      setCovers(JSON.parse(result.request.response));
    };
    getCovers();
  });

  if (!covers) return <i>Loading Resource List...</i>;

  return (
    <div className="App">
      <div>
        <div className="flex flex-row justify-between p-3 text-gray-900 bg-transparent">
          <div className="w-4/5">
            <div className="pl-2 py-2 flex text-xl font-medium tracking-wide uppercase items-center font-raleway">
              Mateo Diaz.
            </div>
            <div>
              {
                Object.values(covers).map(cover => (
                  <AlbumCover
                    imgUrl={cover.cover_url}
                    modelName={cover.model_name}
                    date={cover.book_date}
                  />
                ))
              }
            </div>
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
