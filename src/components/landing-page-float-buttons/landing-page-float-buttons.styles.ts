import styled from 'styled-components';
import {keyframes} from 'styled-components';


const pulseAnimation = keyframes`
    to {
    box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);
    transform:scale(.9);
    }
`

export const Container = styled.div<{ isOnBottom: boolean }>`
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: fixed;
  z-index: 20000;
  right: 20px;
  bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 0 0 0 rgba(232, 76, 61, .5);
  transition: all 0.5s ease;
  animation-name: ${pulseAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;

  .wrapper {
    position: relative !important;
    background-color: #fff;
    transition: all 0.5s ease;
    width: ${({ isOnBottom }) => isOnBottom ? '62px' : '120px'};
    height: ${({ isOnBottom }) => isOnBottom ? '120px' : '62px'};
  }

  .icon:first-child{
    width: 43px;
    height: 43px;
    transition: all 0.5s ease;
    right: 6px;
    bottom:  ${({ isOnBottom }) => isOnBottom ? '47px' : '10px'};
    &:hover{
      color: #FFC32B;
    }
  }

  .icon:last-child{
    width: 50px;
    height: 50px;
    left: 6px;
    bottom: 6px;
  }

  .icon{
    cursor: pointer;
    position: absolute;
  }
`



