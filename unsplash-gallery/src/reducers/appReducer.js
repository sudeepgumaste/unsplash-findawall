const appReducerDefaultState = {
    popupState: false,
    image: {},
    showNavSearch: false
}

const appReducer = (state = appReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_POPUP_STATE' : 
            return {
                ...state,
                popupState: action.trigger
            }
        
        case 'SET_IMAGE_OBJECT' : 
            return {
                ...state,
                image : action.image
            }

        case 'SET_SHOW_NAV_SEARCH' : 
        return {
            ...state,
            showNavSearch : action.trigger
        }

        default:
            return state;
    }
} 

export default appReducer;