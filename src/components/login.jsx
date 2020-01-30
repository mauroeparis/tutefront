import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";

import api from "../Api";
import { ReactComponent as CameraIcon } from '../icons/camera.svg';
import TokenContext from "../TokenContext";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const { tokenDispatch } = useContext(TokenContext);
  const history = useHistory()

  const baseInputClases = `
    appearance-none
    block
    w-full
    bg-gray-200
    border-2  rounded
    py-3 px-4
    leading-tight
    focus:outline-none
    focus:bg-white
    focus:border-gray-500
  `;

  const okInputClasses = `text-gray-700 border-gray-200`;

  const errorInputClases = `text-red-700 border-red-700`;

  const buttonClasses = `
    appearance-none
    block
    w-full
    bg-blue-200
    text-blue-800
    border-2
    border-blue-200
    rounded
    py-3
    px-4
    leading-tight
    focus:outline-none
    hover:bg-blue-300
    hover:text-blue-900
    focus:border-blue-500
  `;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {
    api.auth.login({ email, password })
    .then(res => {
      setError(false)
      tokenDispatch({ type:"LOGIN", token:res.data.access_token });
      history.push("/admin");
    }).catch(res => {
      setError(true);
    })
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div
      className="
        mx-auto
        mt-24
        w-11/12 sm:w-8/12 md:w-5/12 lg:4/12 xl:w-1/4
        bg-white sm:border-gray-200
        sm:shadow-lg sm:border-2 rounded-lg
      "
      onKeyDown={handleKeyDown}
    >
      <div
        className="
          flex flex-col
          justify-center
          py-6 md:pt-0 px-3
        "
      >
        <div
          className="
            flex
            justify-center align-center self-center
            pb-6 sm:-mt-16 md:-mt-12
            rounded-full border-4 border-white
            h-24 w-24
            bg-blue-200
          "
        >
          <CameraIcon
            className="self-center w-12 h-12 text-blue-800 fill-current mt-5"
          />
        </div>
        <div>
          <div className="w-full mt-3">
            <input
              className={
                `${baseInputClases}
                ${error ? errorInputClases : okInputClasses}`
              }
              onChange={handleEmailChange}
              type="email"
              name="email"
              placeholder="E-mail"
            />
          </div>
          <div className="w-full mt-3">
            <input
              className={
                `${baseInputClases}
                ${error ? errorInputClases : okInputClasses}`
              }
              onChange={handlePasswordChange}
              type="password"
              name="password"
              placeholder="contraseña"
            />
          </div>

          {error && (
            <p className="text-red-700 pt-2">Los datos no son correctos</p>)
          }

          <div className="w-full mt-3">
            <button className={buttonClasses} onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
