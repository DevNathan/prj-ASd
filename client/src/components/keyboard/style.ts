import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100dvw;
  height: 30dvh;
  transform: translateY(100%);
  transition: transform 0.5s ease;

  &.show {
    transform: translateY(0);
  }
`;
