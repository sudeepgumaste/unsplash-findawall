import React from 'react';
import styled from 'styled-components';

import {Provider} from "react-redux"

import Images from './components/Images';
import Navbar from './components/Navbar';

import configureStore from './config/reduxStore'

const Wrapper = styled.div`
  width: 100vw;
  overflow-y: hidden;
  min-height: 100vh;
  background: #eeeeee;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height: 100%;
  max-width: 90rem;
  width: 100%;
  padding-top: 2rem;
`

const store = configureStore()
store.subscribe(()=>{
  console.log(store.getState());
})

function App() {
  return (
    <>
      <Provider store={store}>
      <Navbar/>
        <Wrapper>
          <Container>
            <Images/>
          </Container>
        </Wrapper>
      </Provider>
    </>
  );
}

export default App;
