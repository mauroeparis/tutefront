import React from "react";

function About() {
  return (
    <div
      className="
        self-center
        bg-white
        sm:border-gray-200
        sm:shadow-lg
        sm:border-2
        rounded-lg
      "
    >
      <div
        className="
          flex
          flex-col
          justify-center
          py-10
          px-6
        "
      >
        <div className="self-center pb-6">
          <img
            className="object-cover rounded-full shadow-md h-40 w-40"
            src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/02430f6d-af4e-45d1-9a86-bd4dd91db1f7/416cb9dc-d5a4-4bfb-a9dc-d30938854c31_rwc_0x22x4015x5989x4096.jpg?h=a88666c59b26eafbfc33d277d5a5002d"
            alt="Mateo"
          />
        </div>
        <div className="relative">
          <p
            className="
            text-center font-medium leading-relaxed
            self-center md:mx-10 tracking-wider
            text-gray-800
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
        </div>
      </div>
    </div>
  );
}

export default About;
