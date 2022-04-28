import styled from "styled-components";

const CustomButton = styled.button`
  width: 150px;
  height: 45px;
  background: #FFC32B;
  font-weight: bold;
  border: none;
  color: #222;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  cursor: pointer;
  &:hover{
    transform: scale(1.05, 1.05);
  }
`
export default CustomButton;
