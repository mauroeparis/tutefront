import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"


import { ReactComponent as InstaLogo } from '../icons/instagram.svg';
import { ReactComponent as WppLogo } from '../icons/whatsapp.svg';
import { ReactComponent as ImagesLogo } from '../icons/images.svg';
import { ReactComponent as LogoutLogo } from '../icons/logout.svg';
import TokenContext from "../TokenContext";

function Navbar() {
  const { token, tokenDispatch } = useContext(TokenContext);

  const logout = () =>  {
    tokenDispatch({ type:"LOGOUT" });
  };

  return (
    <div
      className="
        flex flex-row justify-between p-3 text-gray-900 bg-transparent
        max-w-5xl mx-auto
      "
    >
      <div
        className="w-4/5 self-center"
      >
        <Link
          to="/"
          className="
            pl-2 py-2 text-xl font-medium
            tracking-wide uppercase font-raleway
          "
        >
          Mateo Diaz.
        </Link>

      </div>
      <div className="flex flex-row bg-white py-2 pr-1">
        <motion.div
          whileHover={{ scale: 1.2, color:"#C13584" }}
          whileTap={{ scale: 0.8, borderRadius: "100%" }}
        >
          <a className="self-center" href="https://www.instagram.com/matuteph/">
            <InstaLogo className="px-3 h-6 w-12"/>
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, color:"#25D366" }}
          whileTap={{ scale: 0.8, borderRadius: "100%" }}
        >
          <a className="self-center" href="https://api.whatsapp.com/send?phone=+5493512016383">
            <WppLogo className="px-3 h-6 w-12" />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, color: "#34B7F1" }}
          whileTap={{ scale: 0.8, borderRadius: "100%" }}
        >
          <Link
            to="/gallery"
            className="self-center"
          >
            <ImagesLogo className="px-3 h-6 w-12" />
          </Link>
        </motion.div>
        {token.token ?
          <button
            onClick={() => logout()}
            className="self-center"
          >
            <LogoutLogo className="px-3 h-6 w-12"/>
          </button> : ""}
      </div>
    </div>
  );
}

export default Navbar;
