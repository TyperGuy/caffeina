import styled from 'styled-components';


export const Container = styled.div`
  min-height : 500px;
  max-width: 1128px;
  width: 1128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Content = styled.h1`
  line-height: 1.1;
  font-weight: 700;
  color: #222;
  font-size: calc(15.3333px + 1.85185vw);
  margin:0;
`

export const Underlined = styled.strong`

  -webkit-background: #FFC32B;
  -webkit-text-fill-color: #FFC32B;
  position: relative;
  display: inline-block;
  &:after{
    content: "";
    position: absolute;
    display: block;
    border-top: 4.9px solid #222;
    border-radius: 47%;
    left: -6px;
    right: -6px;
    bottom: -9px;
    height: 11px;
    transform: rotate(-0.6deg);
  }
`
export const Image = styled.img`
  height: 450px;
`



