import React from "react";
import { motion } from "framer-motion"

function About() {
  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0, opacity: 1
    }
  }

  return (
    <motion.div className="w-full p-2 self-center" variants={item}
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
            src={process.env.PUBLIC_URL + "/img/mateodiaz.png"}
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
            Nací en Tinogasta, Catamarca en el año 1998 y
            actualmente estoy viviendo en la ciudad
            de Córdoba. Mi comienzo en el mundo de la
            fotografía empezó a los 12 años como un hobby,
            en el cual poco a poco me fui introduciendo.
            A mediados del año 2017 decidí querer llevarlo a
            algo más profesional. Desde ese momento me
             encuentro trabajando como fotógrafo, por lo que
             me siento muy contento y satisfecho tanto a
             nivel profesional como personal.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
