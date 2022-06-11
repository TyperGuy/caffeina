import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1128px;
  width: 1128px;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: space-between;
`;
export const Content = styled.h1`
  line-height: 1.1;
  font-weight: 700;
  color: #222;
  font-size: calc(15.3333px + 1.85185vw);
  margin:0;
`

export const Image = styled.img`
  height: 450px;
`

export const Logo = styled.img`
  height: 40px;
`

export const Button = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: #cccc;
  border-radius: 8px;
  transition: all .5s ease-in-out;
  cursor: pointer;
  &:hover{
    background-color: #222;
    color: #fff;
  }
`




