
import React, { useReducer } from "react"

export default (initalState, actionv, hey_array) => {


    const Context = React.createContext();
    const Provider = ({ children }) => {
        const [state, action] = useReducer(initalState, hey_array);

        const hhe = {};
        for (var ii in actionv) {
            hhe[ii] = actionv[ii](action);

        }


        return (
            <Context.Provider value={{ state, ...hhe }}>
                {children}
            </Context.Provider>)
    }
    return { Context, Provider };
};


