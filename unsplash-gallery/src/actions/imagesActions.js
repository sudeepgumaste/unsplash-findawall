import Axios from 'axios';
import { backendURL } from '../config/index';

export const setKeyword = (keyword) =>({
    type: 'SET_KEYWORD',
    keyword
})

export const setImages = (keyword, page, imageCount) => dispatch => {
    
    Axios.get(`${backendURL}/api/photos?page=${page}&count=${imageCount}`)
    .then(
        (res) => {
        dispatch({
                type: "SET_IMAGES",
                images: res.data
            })
        }
    );
}