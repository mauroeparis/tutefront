import React from 'react';

import AlbumCover from './albumCover';
import About from './about';
import Contact from './contact';

function Home(props) {

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
                imgUrl={"https://pro2-bar-s3-cdn-cf2.myportfolio.com/02430f6d-af4e-45d1-9a86-bd4dd91db1f7/3f9ceacb-f91d-476e-ab94-dc6d40459d9a_rw_1920.jpg?h=7e7157750370c2315a2e9caf3ebe92b8"}
                modelName={""}
                date={""}
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
                imgUrl={"https://pro2-bar-s3-cdn-cf2.myportfolio.com/02430f6d-af4e-45d1-9a86-bd4dd91db1f7/352b40f3-8539-40dc-aa48-f1d94a843434_rw_1920.jpg?h=8f5fa0c5f3c5a73752f09f5de8efeca6"}
                modelName={""}
                date={""}
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
                imgUrl={"https://pro2-bar-s3-cdn-cf4.myportfolio.com/02430f6d-af4e-45d1-9a86-bd4dd91db1f7/5db41ff2-4079-4b60-9060-62e9b318b916_rw_1920.jpg?h=af5ae9975fc93060c2255e7bc5fbfa8b"}
                modelName={""}
                date={""}
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
                imgUrl={"https://i.imgur.com/tmoMBuP.jpg"}
                modelName={""}
                date={""}
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
                imgUrl={"https://i.imgur.com/2Njwtjf.jpg"}
                modelName={""}
                date={""}
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
