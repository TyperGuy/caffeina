import styled from 'styled-components';




export const Container = styled.div`
  width:50px;
  height:50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  z-index: 20000;
  right: 100px;
  bottom: 20px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 50%;

  .top{
    font-size:2.3rem;
    transition: all 0.5s ease;
    &:hover{
      color: #FFC32B;
    }
  }
`



