import React, { useRef, useState } from "react";
import { useKeyboard } from "@/contexts/KeyboardContext";
import ask from "@/lib/ask";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "@/assets/icons/LoadingSpinner";
import * as S from "./style";
import BackIcon from "@/assets/icons/BackIcon";
import Palette from "@/global/Palette";
import { useLoadingScreen } from "@/contexts/LoadingScreenContext";

const Write = () => {
  const { openKeyboard, resetBuffer, closeKeyboard } = useKeyboard();
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);
  const { show, hide } = useLoadingScreen();

  const handleFocus = () => {
    ref.current && openKeyboard(ref.current);
  };

  const handleReset = () => {
    if (ref.current) {
      ref.current.value = "";
      resetBuffer();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    closeKeyboard();

    if (ref.current?.value) {
      console.log(ref.current?.value);
      setIsFetching(true);
      show();
      try {
        const data = await ask(ref.current.value);
        navigate("/ask/confirm", { state: data });
      } catch (error: any) {
        console.error(error);
      } finally {
        setIsFetching(false);
        hide();
      }
    }
  };

  return (
    <S.Wrapper>
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
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", display: "grid", gap: 20 }}
      >
        <S.Label>
          <S.Textarea ref={ref} onFocus={handleFocus} disabled={isFetching} />
        </S.Label>
        {/*<button type="button" onClick={handleReset}>*/}
        {/*  초기화*/}
        {/*</button>*/}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <S.Submit type="submit" disabled={isFetching}>
            제출하기
          </S.Submit>
        </div>
      </form>
    </S.Wrapper>
  );
};

export default Write;
