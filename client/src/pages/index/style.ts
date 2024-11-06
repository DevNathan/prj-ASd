import styled from "styled-components";
import Palette from "../../global/Palette";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 60px;
  box-sizing: border-box;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  flex: 1;
  background-color: ${Palette.primary.m1};
  border-radius: 40px;
  box-shadow: 4px 4px 10px rgba(179, 167, 167, 1);
  gap: 50px;

  &:active {
    box-shadow: inset 4px 4px 10px rgba(179, 167, 167, 0.5);
  }
`;

export const ButtonImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  border-radius: 20px;
`;

export const ButtonName = styled.p`
  width: 100%;
  border-radius: 40px;
  font-size: 100px;
  text-align: center;
  padding: 20px 0;
  font-weight: 600;
`;
