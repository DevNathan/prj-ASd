import React, { createContext, useContext, useState, useRef } from "react";
import Hangul from "hangul-js";

type KeyboardContextType = {
  isVisible: boolean;
  openKeyboard: (input: HTMLInputElement | HTMLTextAreaElement) => void;
  closeKeyboard: () => void;
  handleKeyPress: (key: string) => void;
  focusInput: () => void;
  resetBuffer: () => void;
};

const KeyboardContext = createContext<KeyboardContextType | undefined>(
  undefined,
);

export const useKeyboard = () => {
  const context = useContext(KeyboardContext);
  if (!context) {
    throw new Error("올바르지 않은 키보드 컨텍스트 사용");
  }
  return context;
};

/*
 * 개발 시 항상 모든 문제는 한글에서 오는 듯 ㅅㅂ
 *
 * 일단 기본적으로 모든 글자는 buffer에다가 다 때려박는다.
 *
 * 키보드를 열고자 한다면 반드시 input요소를 받아 어디다가 글자를 입력할건지 확실히 하게하고
 * input value를 받아서 조합된 한글을 다 찢어 놓고 buffer에 담아 관리한다.
 *
 * input을 리턴 해줄때 hangul.assemble시켜서 input에다가 때려박아준다라는 개념으로
 * 개발하였고 결론적으로 별로 문제는 없는 듯 보임.
 *
 * */
export const KeyboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const [buffer, setBuffer] = useState<string[]>([]);

  const setInputElement = (element: any) => {
    inputRef.current = element;
  };

  // 입력 필드에 최종 조합된 값을 설정
  const updateInputValue = (newBuffer: string[]) => {
    const combined = Hangul.assemble(newBuffer);
    if (inputRef.current) {
      inputRef.current.value = combined;
      inputRef.current.focus();
    }
  };

  // 키보드에서 받은 키를 버퍼에 추가하고, 최종 값을 업데이트
  const handleKeyPress = (key: string) => {
    if (key === "{bksp}") {
      buffer.pop();
    } else if (key === "{space}") {
      buffer.push(" ");
    } else if (key === "{enter}") {
      // Enter 처리: 키보드를 닫거나 다른 동작
      closeKeyboard();
      return;
    } else {
      buffer.push(key);
    }

    setBuffer([...buffer]);
    updateInputValue(buffer);
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const openKeyboard = (input: HTMLInputElement | HTMLTextAreaElement) => {
    setInputElement(input);
    setIsVisible(true);

    if (input.value) {
      // 기존 입력된 값을 자모 단위로 분해하여 buffer에 저장
      const disassembled = Hangul.disassemble(input.value);
      setBuffer(disassembled);
    }

    input.focus();
  };

  const closeKeyboard = () => {
    setInputElement(null);
    resetBuffer();
    setIsVisible(false);
  };

  // 버퍼 초기화
  const resetBuffer = () => {
    setBuffer([]);
  };

  return (
    <KeyboardContext.Provider
      value={{
        isVisible,
        openKeyboard,
        closeKeyboard,
        handleKeyPress,
        focusInput,
        resetBuffer,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};
