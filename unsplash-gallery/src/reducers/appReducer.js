const appReducerDefaultState = {
    popupState: false,
    image: {} 
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

        default:
            return state;
    }
} 

export default appReducer;