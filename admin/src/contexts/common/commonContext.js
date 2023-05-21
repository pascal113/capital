import { createContext, useReducer } from 'react';
import commonReducer from './commonReducer';

// Common-Context
const commonContext = createContext();

// Initial State
const initialState = {
    curLanguage: 'DE'
};

// Common-Provider Component
const CommonProvider = ({ children }) => {

    const [state, dispatch] = useReducer(commonReducer, initialState);

    const setLanguage = (results) => {
        return dispatch({
            type: 'SET_LANGUAGE',
            payload: { results }
        });
    };

    

    // Context values
    const values = {
        ...state,
        setLanguage
    };

    return (
        <commonContext.Provider value={values}>
            {children}
        </commonContext.Provider>
    );
};

export default commonContext;
export { CommonProvider };