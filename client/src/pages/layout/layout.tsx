import React from "react";
import * as S from "./style";
import { Outlet } from "react-router-dom";
import Keyboard from "@/components/keyboard/Keyboard";

const Layout = () => {
  return (
    <S.Screen>
      <S.InnerBox>
        <Outlet />
      </S.InnerBox>
      <Keyboard />
    </S.Screen>
  );
};

export default Layout;
