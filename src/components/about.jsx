import React from "react";

function About() {
  return (
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
  );
}

export default About;
