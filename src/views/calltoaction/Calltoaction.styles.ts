import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1128px;
  width: 1128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Content = styled.h1`
  line-height: 1.1;
  font-weight: 700;
  max-width: 571px;
  margin-bottom: 16px;
  color: #222;
  font-size: calc(23.3333px + 1.85185vw);
  margin-bottom: 2rem;
`

export const Underlined = styled.strong`
  background: rgba(0, 0, 0, 0) linear-gradient(to right, #cc3333, #cc00ff) repeat scroll 0% 0% padding-box text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  &:after{
    content: "";
    position: absolute;
    display: block;
    border-top: 4.9px solid #FFC32B;
    border-radius: 47%;
    left: -6px;
    right: -6px;
    bottom: -9px;
    height: 11px;
    transform: rotate(-0.6deg);
  }
`

