import styled from 'styled-components';


export const Container = styled.div`
  min-height : 500px;
  max-width: 1128px;
  width: 1128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;

`;
export const Content = styled.h1`
  line-height: 1;
  color: #222;
  font-size: calc(15.3333px + 1.85185vw);
  margin:0;
`

export const Underlined = styled.strong`

  -webkit-background: #F34747;
  -webkit-text-fill-color: #F34747;
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
  height: 400px;
`



