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
      <div className="md:flex md:flex-row">
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
      <div className="flex flex-col w-full justify-center text-gray-900">
        <h1 className="font-raleway text-3xl font-thin uppercase text-center pt-16 pb-10">
          Sobre Mí
        </h1>
        <div className="flex justify-center pb-6">
          <img
            src="https://instagram.fcor5-1.fna.fbcdn.net/vp/42ba05d4ae677b4e2299d61d3784e76d/5E8377CC/t51.2885-19/s150x150/77119430_517993535420467_8093270114398371840_n.jpg?_nc_ht=instagram.fcor5-1.fna.fbcdn.net"
            className="rounded-full" alt="Mateo"
            />
        </div>
        <p className="text-center font-medium leading-relaxed">
          Lorem Ipsum is simply dummy text
          of the printing and typesetting
           industry. Lorem Ipsum has
            been the industry's standard
            dummy text ever since the 1500s,
            when an unknown printer took a galley
            of type and scrambled it to make
            a type specimen book. It has survived
            not only five centuries, but also the
            leap into electronic typesetting,
            remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
}

export default Home;
