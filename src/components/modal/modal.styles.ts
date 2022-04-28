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
  height: 330px;
  background-color: #fff;
  position: relative;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:1rem;
  border-radius: 8px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
`
export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`
export const Description = styled.p`
  font-size: 1rem;
  width: 80%;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
`

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background: #FFC32B;
  font-weight: bold;
  border: none;
  color: #222;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
  &:hover{
    transform: scale(1.05, 1.05);
  }
`
export const Span = styled.button`
  width: 150px;
  height: 40px;
  background: #fff;
  border: none;
  color: #000;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  &:hover{
    background-color: #dcdcdc;
  }
`

