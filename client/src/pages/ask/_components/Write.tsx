import React, { useRef, useState } from "react";
import { useKeyboard } from "@/contexts/KeyboardContext";
import ask from "@/lib/ask";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "@/assets/icons/LoadingSpinner";
import * as S from "./style";
import BackIcon from "@/assets/icons/BackIcon";
import Palette from "@/global/Palette";

const Write = () => {
  const { openKeyboard, resetBuffer, closeKeyboard } = useKeyboard();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);

  const handleFocus = () => {
    inputRef.current && openKeyboard(inputRef.current);
  };

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      resetBuffer();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    closeKeyboard();

    if (inputRef.current?.value) {
      console.log(inputRef.current?.value);
      setIsFetching(true);
      try {
        const data = await ask(inputRef.current.value);
        navigate("/ask/confirm", { state: data });
      } catch (error: any) {
        console.error(error);
      } finally {
        setIsFetching(false);
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
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" onFocus={handleFocus} />
        <button type="button" onClick={handleReset}>
          초기화
        </button>
        <button type="submit" disabled={isFetching}>
          제출하기
        </button>
        {isFetching && <LoadingSpinner />}
      </form>
    </S.Wrapper>
  );
};

export default Write;
