import styled, { keyframes } from 'styled-components';

const loadBg = keyframes`
    0%, 100%{
        background-position: right;
    }
    50%{
        background-position: left;
    }
`;

const LoaderAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    to right,
    rgb(241, 240, 240),
    #c1c0c0,
    rgb(241, 240, 240)
  );
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-size: 200%;
  animation: ${loadBg} 1s linear 0s infinite normal;
`;

export default LoaderAnimation;