import React from "react";
import * as S from "./style";
import WriteIcon from "../../assets/icons/WriteIcon";
import Palette from "@/global/Palette";
import MapIcon from "@/assets/icons/MapIcon";

const IndexPage = () => {
  return (
    <S.Wrapper>
      <S.Button to={"/ask"}>
        <S.ButtonImageBox>
          <WriteIcon fill={Palette.iconFill} width={400} height={400} />
        </S.ButtonImageBox>
        <S.ButtonName style={{ color: Palette.lightRed }}>접수</S.ButtonName>
      </S.Button>
      <S.Button to={"/there"}>
        <S.ButtonImageBox>
          <MapIcon fill={Palette.iconFill} width={400} height={400} />
        </S.ButtonImageBox>
        <S.ButtonName style={{ color: Palette.lightGreen }}>
          길안내
        </S.ButtonName>
      </S.Button>
    </S.Wrapper>
  );
};

export default IndexPage;
