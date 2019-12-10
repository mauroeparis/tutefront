import React, { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

import AlbumCover from './albumCover';

function Home() {
  const [covers, setCovers] = useState();

  useEffect(() => {
    const getCovers = async () => {
      const result = await await axios(
      'http://192.168.0.10:5000/',
    );
      setCovers(_.values(JSON.parse(result.request.response)));
    };
    getCovers();
  });

  if (!covers) return <i>...</i>;

  return (
    <div className="flex flex-col">
      <div
        className="
          flex
          flex-col
          w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
          md:mx-auto
        "
      >
        <div className="w-3/4 md:w-7/12 md:-mb-24 lg:w-9/12 lg:-mb-64">
          {
            <AlbumCover
              imgUrl={covers[0].cover_url}
              modelName={covers[0].model_name}
              date={
                moment(new Date(covers[0].book_date)).format('DD MMM. YYYY')
              }
            />
          }
        </div>
        <div
          className="
            w-3/4 md:w-2/3 lg:w-1/2
            -mt-40 md:-mt-48
            -mb-6 lg:-mb-1
            self-end
            z-20
          "
        >
          {
            <AlbumCover
              imgUrl={covers[1].cover_url}
              modelName={covers[1].model_name}
              date={
                moment(new Date(covers[1].book_date)).format('DD MMM. YYYY')
              }
            />
          }
        </div>
        <div
          className="
            w-3/4 md:w-3/4 lg:w-7/12
            -mt-24 md:-mt-64
            md:ml-8
            z-10
          "
        >
          {
            <AlbumCover
              imgUrl={covers[2].cover_url}
              modelName={covers[2].model_name}
              date={
                moment(new Date(covers[2].book_date)).format('DD MMM. YYYY')
              }
            />
          }
        </div>
      </div>
      <div className="flex flex-col w-full justify-center bg-blue-100 mt-8">
        <div className="max-w-5xl self-center">
          <h1
            className="
              text-3xl font-raleway uppercase
              text-left pt-4 pb-6 self-center
              text-blue-800 text-center
            "
          >
            Sobre Mí
          </h1>
          <div className="flex justify-center pb-6 flex-col md:flex-row">
            <div className="self-center pb-6">
              <img
                className="object-cover rounded-full h-40 w-40 md:mr-6"
                src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/02430f6d-af4e-45d1-9a86-bd4dd91db1f7/416cb9dc-d5a4-4bfb-a9dc-d30938854c31_rwc_0x22x4015x5989x4096.jpg?h=a88666c59b26eafbfc33d277d5a5002d"
                alt="Mateo"
              />
            </div>
            <div className="relative">
              <span
                className="
                  absolute
                  font-serif
                  font-black
                  text-6xl
                  text-blue-800
                  left-0
                  top-0"
              >
                ❝
              </span>
              <p
                className="
                text-center font-medium leading-relaxed
                max-w-md self-center mx-10
                "
              >
                Nací en Tinogasta en el año 1998.
                Mi comienzo por la fotografía empezó
                a los 12 años como un hobby.
                Poco a poco me fui introduciendo en
                el mundo de la fotografía y
                llego un punto donde lo quise llevar a
                algo mas profesional, que fue a mediados
                del 2017. Desde ese momento es que estoy
                trabajando como fotógrafo y estoy muy contento
              </p>
              <span
                className="
                  absolute
                  font-serif
                  font-black
                  text-6xl
                  text-blue-800
                  right-0
                  bottom-0"
                >
                  ❞
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
