import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0;
  left:0;
  z-index: 50000;
  background-color: rgba(1,1,1 ,.1);
  display:grid;
  place-items: center;
`

export const ContentContainer = styled.div`
  width: 800px;
  height: 80vh;
  border-radius: 8px;
  background-color: #fff;
  display: flex ;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`
export const Row = styled.div`
  width: 100%;
  height: 4px;
  border-radius:8px 8px 0 0;
  background-color: #F34747;
`
export const CloseBtn = styled.div`
  width: 25px;
  height: 25px;
  border-radius:50%;
  background-color: #eee;
  display: grid;
  place-items: center;
  align-self: flex-end;
  margin:10px;
  cursor: pointer;
  color: #222;
  transition: all 0.3s ease-in-out;
  &:hover{
    color: #fff;
    background-color:#222;
  }
`
