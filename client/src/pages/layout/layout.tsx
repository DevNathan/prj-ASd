import React from "react";
import * as S from "./style";
import { Outlet } from "react-router-dom";
import Keyboard from "@/components/keyboard/Keyboard";
import LoadingSpinner from "@/assets/icons/LoadingSpinner";
import { useLoadingScreen } from "@/contexts/LoadingScreenContext";

const Layout = () => {
  const { isVisible } = useLoadingScreen();

  return (
    <S.Screen>
      <S.ScreenMask className={isVisible ? "show" : ""}>
        <LoadingSpinner />
      </S.ScreenMask>
      <S.InnerBox>
        <Outlet />
      </S.InnerBox>
      <Keyboard />
    </S.Screen>
  );
};

export default Layout;
