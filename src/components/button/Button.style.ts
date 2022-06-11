import styled from "styled-components";

export const CustomButton = styled.button<
{
  color: string,
  hoverColor:string,
  background: string,
  hoverBackground: string,
  title: string
}>`
  height: 55px;
  background: ${(props)=>props.background};
  color: ${(props)=>props.color};
  border: 3px solid ${(props)=>props.background};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  &:hover{
    background: ${(props) => props.hoverBackground};
    color: ${(props)=>props.hoverColor};
  }
  `
export const PlayButton = styled.button`
  height: 55px;
  background: #fff;
  color: #222;
  border: 3px solid #222;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  &:hover{
    background: #FFC32B;
  }
  `


