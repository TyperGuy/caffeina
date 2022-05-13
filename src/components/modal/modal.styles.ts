import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 50000;
  background-color: #9C9C9C85;
  background: transparent;

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
  height: 225px;
  background-color: #fff;
  position: relative;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:1rem;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -65px;
`

export const Description = styled.p`
  font-size: 1rem;
  width: 80%;
  text-align: justify;
  font-weight: 300;
  color: #808080;
  margin: 0;
`

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background: #222;
  font-weight: 400;
  border: none;
  color: #fff;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
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
  &:hover{
   color: #222;
   font-weight: 500;
  }
`

