import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 50000;
  background-color: #9C9C9C85;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  .close {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`
