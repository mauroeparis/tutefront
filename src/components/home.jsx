import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

import AlbumCover from './albumCover';
import About from './about';
import Contact from './contact';

function Home(props) {
    const [covers, setCovers] = useState();
    const [structures, setStructures] = useState();

    useEffect(() => {
      const getCovers = async () => {
        const result = await await axios(
          'http://192.168.0.10:5000/',
        );
        setCovers(_.values(JSON.parse(result.request.response)['covers']));
        setStructures(_.values(JSON.parse(result.request.response)['structures']));
      };
      getCovers();
    });

    if (!covers || !structures) return <i>...</i>;

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
            z-10
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
            lg:-mb-32
            md:ml-8
            z-20
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

          <div
            className="
            w-full sm:w-3/4 md:w-2/3 lg:w-1/2
            sm:-mt-40 md:-mt-48 lg:-mt-64
            sm:-mb-64 lg:-mb-64
            self-end
            z-20
            "
          >
            {
              <About />
            }
          </div>

          <div className="w-3/4 md:w-7/12 md:-mb-24 lg:w-9/12 lg:-mb-64">
            {
              <AlbumCover
                imgUrl={structures[0].structure_url}
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
            sm:-mb-6 lg:-mb-1
            self-end
            z-10
            "
          >
            {
              <AlbumCover
                imgUrl={structures[1].structure_url}
                modelName={covers[1].model_name}
                date={
                  moment(new Date(covers[1].book_date)).format('DD MMM. YYYY')
                }
              />
            }
          </div>
          <div
            className="
            w-full sm:w-3/4 md:w-3/4 lg:w-6/12
            sm:-mt-24 md:-mt-64
            lg:-mb-32
            md:ml-8
            z-20
            "
          >
            {
              <Contact />
            }
          </div>
        </div>
      </div>
    );
  }

export default Home;
