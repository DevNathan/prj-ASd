import styled from "styled-components";
import { Link } from "react-router-dom";
import Palette from "@/global/Palette";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  flex: 1;
  padding: 40px;
  box-sizing: border-box;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: black;
  font-size: 100px;
  font-weight: 600;
`;

export const BackButton = styled(Link)`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 50%;
  background-color: ${Palette.primary.m2};
  border-radius: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  & p {
    position: relative;
    bottom: 10px;
  }

  &:active {
    box-shadow: inset 0 0 10px rgba(179, 167, 167, 0.5);
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  box-sizing: border-box;
  flex: 1;
`;

export const Button = styled.button`
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
