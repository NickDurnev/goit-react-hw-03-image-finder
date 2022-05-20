import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.span`
  margin-left: auto;
  margin-right: auto;
  width: 15vw;
  height: 15vh;
  animation: ${rotate} 2s linear infinite;
`;

export default Rotate;
