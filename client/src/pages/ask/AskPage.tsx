import React, { useState } from "react";
import Write from "@/pages/ask/_components/Write";
import Voice from "@/pages/ask/_components/Voice";
import * as S from "./style";
import Palette from "@/global/Palette";
import BackIcon from "@/assets/icons/BackIcon";
import MicIcon from "@/assets/icons/MicIcon";
import KeyboardIcon from "@/assets/icons/KeyboardIcon";

const AskPage = () => {
  const [page, setPage] = useState<"main" | "write" | "voice">("main");

  return (
    <>
      {page === "main" && (
        <S.MainWrapper>
          <S.TitleWrapper>
            <S.BackButton to={"/"}>
              <BackIcon fill={Palette.errorRed} width={80} height={80} />
              <p>뒤로가기</p>
            </S.BackButton>
            <S.Title>
              어디가 <span style={{ color: Palette.lightRed }}>불편</span>
              하신가요?
            </S.Title>
          </S.TitleWrapper>
          <S.ButtonWrapper>
            <S.Button onClick={() => setPage("voice")} type={"button"}>
              <S.ButtonImageBox>
                <MicIcon fill={Palette.lightRed} width={400} height={400} />
              </S.ButtonImageBox>
              <S.ButtonName style={{ color: Palette.lightRed }}>
                말하기
              </S.ButtonName>
            </S.Button>
            <S.Button onClick={() => setPage("write")} type={"button"}>
              <S.ButtonImageBox>
                <KeyboardIcon
                  fill={Palette.lightGreen}
                  width={400}
                  height={400}
                />
              </S.ButtonImageBox>
              <S.ButtonName style={{ color: Palette.lightGreen }}>
                입력하기
              </S.ButtonName>
            </S.Button>
          </S.ButtonWrapper>
        </S.MainWrapper>
      )}
      {page === "voice" && <Voice />}
      {page === "write" && <Write />}
    </>
  );
};

export default AskPage;
