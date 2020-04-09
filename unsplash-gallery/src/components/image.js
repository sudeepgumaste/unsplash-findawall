import React from 'react';

const image = ({url, alt_description}) => {
  return (
    <img src={url} alt={alt_description}></img>
  );
}

export default image;
