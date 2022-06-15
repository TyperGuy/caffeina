import styled from "styled-components";

export const Input = styled.input`
  width:100%;
  box-sizing: border-box;
  border-radius: 4px;
  height: 45px;
  border: 2px solid #d9d9d9;
  background-color: #d9d9d9;
  outline: none;
  padding: 1.5rem 1rem;
  transition: all 0.05s ease-in;
  font-size:1rem;
  &:focus{
    border: 2px solid #222;
  }
`;
export const Textarea = styled.textarea`
  min-width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid #222;
  background-color: #d9d9d9;
  outline: none;
  padding: 1rem;
  transition: all 0.05s ease-in;
  font-size:1rem;
  resize: none;
  &:focus{
    border: 2px solid #FFC32B;
  }
`;

