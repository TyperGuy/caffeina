import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';

// Styled component named StyledButton
export const Container = styled.div`
  width: 100vw;
  height: 281px;
  display: grid;
  place-items: center;
  background-color: rgb(255,205,0);
`;

export const ChildContainer = styled.div`
  height:100%;
  width: 100%;
  display: grid;
  place-items: center;
  background-image: url('background-face.png');

`;

export const Stats = styled.div`
  width: 1000px;
  display: flex;
  justify-content:space-between;
  gap:1.5rem;
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Mylink = styled(Link)`
  height: 100%;
  width: 100%;
`;


export const Logo = styled(Image) `
  max-height: 60px;
  max-width: 60px
`

export const Item = styled.div<{isActive: boolean}> `
  height: 100%;
  padding: 0  0.5rem;
  display: grid;
  place-items: center;
  transition: all .2s ease-in-out;
  font-weight: ${(props)=>props.isActive? 'bold' : 'normal'};
  color: ${(props)=>props.isActive? '#F34747' : '#222'};
  border-bottom: 3px solid ${(props)=>props.isActive? '#F34747' : '#fff'};
  &:hover{
    background-color:#eee;
  }
`






