import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


import Images from './components/Images';
import Navbar from './components/Navbar';
import Popup from './components/Popup';


const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  `
const Container = styled.div`
  overflow-y: auto;
  max-width: 90rem;
  width: 100%;
  padding-top: 2rem;
`

function App({popupState}) {
  return (
    <>
      { popupState && <Popup/> }
      <Navbar/>
      <Wrapper>
        <Container>
          <Images/>
        </Container>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  popupState : state.appReducer.popupState
})

export default connect(mapStateToProps)(App);
