const imagesReducerDefaultStarte = {
    images : [],
    keyword: null,
    page: 1
}

const imagesReducer = (state = imagesReducerDefaultStarte, action) => {
    switch(action.type){
        case 'SET_PAGE' : 
            return {
                ...state,
                page: action.page
            }

        case 'SET_IMAGES' : 
            return {
                ...state, 
                images: action.images
            }

        case 'EXTEND_IMAGES' : 
            return {
                ...state,
                images : [...state.images, ...action.images]
            }

        case 'SET_KEYWORD' : 
            return {
                ...state,
                keyword: action.keyword
            }

        default: 
            return state;
    }
} 

export default imagesReducer;