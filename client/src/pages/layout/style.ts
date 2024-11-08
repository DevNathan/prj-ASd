import styled from "styled-components";
import Palette from "../../global/Palette";

export const Screen = styled.div`
  max-width: 100dvw;
  max-height: 100dvh;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background-color: ${Palette.primary.m1};
  position: relative;
  overflow: clip;
`;

export const ScreenMask = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;

export const InnerBox = styled.div`
  flex: 1;
  height: calc(100dvh - 40px);
  border-radius: 40px;
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: ${Palette.point.p1};
`;
