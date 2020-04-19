import Axios from 'axios';
import { backendURL } from '../config/index';

export const setKeyword = (keyword) =>({
    type: 'SET_KEYWORD',
    keyword
})

export const setPage = (page) => ({
    type: 'SET_PAGE',
    page
})

export const setImages = ({page, imageCount, keyword}) => dispatch => {
    if(!keyword){
        Axios.get(`${backendURL}/api/photos?page=${page}&count=${imageCount}`)
        .then(
            (res) => {
            dispatch({
                    type: "SET_IMAGES",
                    images: res.data
                })
            }
        );
    }else{
        Axios.get(`${backendURL}/api/photos/search?keyword=${keyword}&page=${page}&count=${imageCount}`)
            .then((res) => {
                dispatch({
                    type: "SET_IMAGES",
                    images: res.data.results
                }) 
            });
    }
}

export const extendImages = ({page, imageCount, keyword}) => dispatch => {
    if(!keyword){
        Axios.get(`${backendURL}/api/photos?page=${page}&count=${imageCount}`)
            .then(
                (res) => {
                dispatch({
                        type: "EXTEND_IMAGES",
                        images: res.data
                    })
                }
        );
    }else{
        Axios.get(`${backendURL}/api/photos/search?keyword=${keyword}&page=${page}&count=${imageCount}`)
            .then((res) => {
                dispatch({
                    type: "EXTEND_IMAGES",
                    images: res.data.results
                }) 
            });
    }
}