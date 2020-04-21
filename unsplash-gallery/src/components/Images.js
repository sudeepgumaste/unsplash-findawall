import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

import Image from './Image';

import { setImages, extendImages, setPage } from '../actions/imagesActions';
import { connect } from 'react-redux';

const imageCount = 15;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Images = ({images, page, keyword, dispatch}) => {

  useEffect(() => {
    dispatch(setImages({page,imageCount}));
    dispatch(setPage(page+1));
    // eslint-disable-next-line
  }, []);

  const fetchLatestImages = () => {
    dispatch(extendImages({page, imageCount, keyword: keyword}));
    dispatch(setPage(page+1));
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchLatestImages}
        hasMore={true}
        loader={<h4>Loading..</h4>}
        >
        <Container>
        {images.map((image, index) => (
          <Image
            key = {index}
            image = {image}
          />
        ))}
        </Container>
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: state.imagesReducer.images,
  keyword: state.imagesReducer.keyword,
  page: state.imagesReducer.page
})

export default connect(mapStateToProps)(Images);
