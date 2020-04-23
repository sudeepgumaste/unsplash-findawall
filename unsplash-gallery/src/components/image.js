import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setPopupState, setImageObject } from '../actions/appActions';

const ImageContainer = styled.div`
  --width-calc : min(20rem, 100%);
  width: 20rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 1rem;
  margin:1rem;
  background: #f3f3f3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .artist-overlay{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    opacity: 0;
    transition: opacity ease 0.2s;
    cursor: pointer;
    padding: 1rem;
    display: flex;
    justify-content: center;

    .artist-card{
      padding: 0.5rem 1rem;
      background: #f3f3f3;
      border-radius: 0.5rem;
      margin-top: auto;
      display: flex;
      align-items: center;

      .artist-image{
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 1rem;
        border: 1px solid #ccc;
        background-size: contain;
      }
    }
    &:hover{
      opacity: 1
    }
  }
`;

const Image = ({image, dispatch}) => {
  return (
    <ImageContainer style={{
      backgroundImage: `url(${image.urls.small})` 
    }}>
      <div 
        className="artist-overlay"
        onClick = {()=>{
          window.document.body.style.overflowY = 'hidden'
          dispatch(setPopupState(true));
          dispatch(setImageObject(image));
        }}
      >
        <div className="artist-card">
          <div 
            className="artist-image"
            style={{
              backgroundImage : `url(${image.user.profile_image.small})`
            }}
          >
          </div>
          {image.user.name}
        </div>
      </div>
    </ImageContainer>
  );
}

export default connect()(Image);
