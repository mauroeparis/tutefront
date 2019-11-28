import React, { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment';

import AlbumCover from './albumCover';

function Home() {
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

  if (!covers) return <i>...</i>;

  return (
    <div>
      {
        Object.values(covers).map(cover => (
          <AlbumCover
            key={cover.cover_url}
            imgUrl={cover.cover_url}
            modelName={cover.model_name}
            date={moment(new Date(cover.book_date)).format('DD MMM. YYYY')}
          />
        ))
      }
    </div>
  );
}

export default Home;
