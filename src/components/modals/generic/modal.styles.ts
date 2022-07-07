import styled ,{keyframes} from 'styled-components';

const slowFade = keyframes`
  from{
    opacity:0;
    transform:scale(0);
  }

  to{
    opacity:1;
    transform:scale(1);
  }
`
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0;
  left:0;
  z-index: 50000;
  background-color: rgba(1,1,1 ,.2);
  display:grid;
  place-items: center;
`



export const ContentContainer = styled.div`

  border-radius: 6px;
  background-color: #fff;
  display: flex ;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
  animation-name:${slowFade};
  animation-duration: .3s;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`

export const Row = styled.div`
  width: 100%;
  height: 4px;
  border-radius:8px 8px 0 0;
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
  color: #666;
  transition: all 0.3s ease-in-out;
  &:hover{
    color: #F34747;
    background-color:rgba(255,0,0,.1);
  }
`
