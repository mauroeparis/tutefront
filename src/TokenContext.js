import { createContext } from "react";

const TokenContext = createContext({
  token: localStorage.token,
});

export function tokenReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.token);
      return { token: action.token };
    case "LOGOUT":
      delete localStorage.token;
      return { token: null };
    default:
      throw new Error();
  }
}

export default TokenContext;
