import styled from 'styled-components';

export const Container = styled.div`
  width:35px;
  height:35px;
  display: grid;
  place-items: center;
  position: fixed;
  z-index: 20000;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  background-color: #222;
  color: #fff;
  cursor: pointer;
  transition: all 0.05s ease;

  .top{
    font-size:2.3rem;
  }
  &:hover{
    background-color: #233;
  }
`



