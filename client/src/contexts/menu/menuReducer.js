const menuReducer = (state, action) => {
    switch (action.type) {

        case 'SELECT_MENU_ITEM':
            return state;

        case 'HOVER_MENU_ITEM':
            console.log('Reducer : HOVER_MENU_ITEM payload:');
            return action.payload;

        default:
            return state;
    }
};

export default menuReducer;