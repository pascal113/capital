const commonReducer = (state, action) => {
    switch (action.type) {

        case 'SET_LANGUAGE':
            return {
                ...state,
                curLanguage: action.payload.results
            }; 


        default:
            return state;
    }
};

export default commonReducer;