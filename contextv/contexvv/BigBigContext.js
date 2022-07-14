
import React, { useReducer } from "react"

export default (initalState, actionv, hey_array) => {


  const Context2 = React.createContext();
  const Provider2 = ({ children }) => {
    const [state, action] = useReducer(initalState, hey_array);

    const hhe = {};
    for (var ii in actionv) {
      hhe[ii] = actionv[ii](action);

    }


    return (
      <Context2.Provider2 value={{ state, ...hhe }}>
        {children}
      </Context2.Provider2>)
  }
  return { Context2, Provider2 };
};


