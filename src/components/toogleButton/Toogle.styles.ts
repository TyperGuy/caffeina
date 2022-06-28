import styled from "styled-components";

export const Container = styled.div<{enable: boolean}>`
  width: 40px;
  height: 25px;
  padding: 0 2px;
  background: ${(props)=>props.enable? '#222': '#ccc'}  ;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius:16px;
  transition: all 0.3s ease-in-out;
  position: relative;
  `



