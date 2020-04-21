import React from 'react'
import { connect } from 'react-redux'

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
        width: 100%
    }
`

export const Popup = ({dispatch, image}) => {
    return (
        <PopupOverlay
            onClick = {()=>{
                window.document.body.style.overflow='auto';
                dispatch(setPopupState(false));
                dispatch(setImageObject({}));
            }}        
        >
            <PopupCard>
                <img src={image.urls.regular} alt={image.alt_description}/>
            </PopupCard>
        </PopupOverlay>
    )
}

const mapStateToProps = (state) => ({
    image: state.appReducer.image
})

export default connect(mapStateToProps)(Popup);
