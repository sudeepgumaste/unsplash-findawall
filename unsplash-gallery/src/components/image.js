import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 20rem;
  height: 25rem;
  overflow: hidden;
  border-radius: 1rem;
  margin:1rem;
  background: #f3f3f3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .artist{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    opacity: 0;
    transition: opacity ease 0.2s;
    cursor: pointer;
    padding: 1rem;
    display: flex;
    justify-content: center;

    p{
      color: white;
      margin-top: auto;
    }
    &:hover{
      opacity: 1
    }
  }
`;

const Image = ({image}) => {
  return (
    <ImageContainer style={{
      backgroundImage: `url(${image.urls.small})` 
    }}>
      <div className="artist">
        <p>
          {image.user.name}
        </p>
      </div>
    </ImageContainer>
  );
}

export default Image;
