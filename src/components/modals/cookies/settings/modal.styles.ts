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

export const Content = styled.div`
  width: 400px;
  height: 500px;
  background-color: #fff;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:1rem;
  border-radius: 8px;
  border: 2px solid #222;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const Section = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header {
    align-self: start;
  }
  .center {
    align-self: center;
  }
  .footer {
    align-self: end;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  width: 100%;
  text-align: justify;
  font-weight: 300;
  color: #808080;
  margin: 0;
`

export const Button = styled.button`
  width: 150px;
  height: 50px;
  background: #222;
  font-weight: 400;
  border:3px solid #222;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover{
    background-color: #FFC32B;
    color: #222;
  }
`
export const Span = styled.button`
  height: 40px;
  background: #fff;
  border: none;
  color: #808080;
  font-weight: 300;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover{
   color: #222;
  }
`

export const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 600 ;
`

export const Linker = styled.a`
  text-decoration: underline;
  font-weight: 600 ;
  cursor: pointer;
  &:hover{
   color:#F34747;
  }
`


