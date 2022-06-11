import styled from "styled-components";
import Image from 'next/image';

// Styled component named StyledButton
export const Container = styled.div`
  max-width: 1128px;
  width: 1128px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: #fff;
`;

export const ChildContainer = styled.div`
  display: flex;
  align-items: center;
  gap:1.5rem;
  cursor: pointer;
`;


export const Logo = styled(Image) `
  max-height: 60px;
  max-width: 60px
`






