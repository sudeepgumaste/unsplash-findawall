import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';

import styled from 'styled-components';

import { setImageObject, setPopupState } from '../actions/appActions';

const PopupOverlay = styled.div`
    position: fixed;
    top : 0;
    left : 0;
    width: 100vw;
    height: 100vh;
    background : rgba(0,0,0, 0.5);
    display: flex;
    z-index: 6000;
    padding: 2rem;
    overflow-y: scroll;
`
const PopupCard = styled.div`
    margin: auto;
    max-width : 55rem;
    width: 100%;
    padding : 2rem;
    background : white;
    border-radius: 2rem;
    img{
        width: 100%;
        border-radius: 1rem;
    }
`

const toDataURL = url => fetch(url)
.then(response => response.blob())
.then(blob => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onloadend = () => resolve(reader.result)
  reader.onerror = reject
  reader.readAsDataURL(blob)
}))

export const Popup = ({dispatch, image}) => {
    const [imageSrc, setImageSrc] = useState();

    useEffect(()=>{
        toDataURL(image.urls.regular)
            .then(dataUrl => {
                setImageSrc(dataUrl);
             })
    },[])

    return (
        <PopupOverlay
            onClick = {()=>{
                window.document.body.style.overflow='auto';
                dispatch(setPopupState(false));
                dispatch(setImageObject({}));
            }}        
        >
            <PopupCard>
                {imageSrc &&
                <img src={imageSrc} alt={image.alt_description}/>}
            </PopupCard>
        </PopupOverlay>
    )
}

const mapStateToProps = (state) => ({
    image: state.appReducer.image
})

export default connect(mapStateToProps)(Popup);
