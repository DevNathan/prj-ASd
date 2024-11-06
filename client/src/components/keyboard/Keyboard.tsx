import React, { FC, useState } from "react";
import RKB from "react-simple-keyboard";
import "./custom.css";
import { Wrapper } from "@/components/keyboard/style";
import korLayout from "@/components/keyboard/korLayout";
import engLayout from "@/components/keyboard/engLayout";
import { useKeyboard } from "@/contexts/KeyboardContext";

const Keyboard: FC = () => {
  const { isVisible, handleKeyPress, focusInput, closeKeyboard } =
    useKeyboard();
  const [language, setLanguage] = useState<"kor" | "eng">("kor");
  const [layout, setLayout] = useState<"default" | "shift">("default");
  const [isShiftActive, setIsShiftActive] = useState(false);

  const onKeyPress = (button: string) => {
    console.log("키보드 입력 =>", button);

    if (button === "{lan}") {
      setLanguage(language === "kor" ? "eng" : "kor");
    } else if (button === "{shift}") {
      // 쉬프트 토글링, 한번 눌리면 shift 레이아웃 적용
      setIsShiftActive((prevShiftActive) => {
        const toggleBoo = !prevShiftActive;
        setLayout(toggleBoo ? "shift" : "default");
        return toggleBoo;
      });
    } else if (button === "{caps}") {
      setLayout(layout === "default" ? "shift" : "default");
      setIsShiftActive(false); // 쉬프트와 달리 캡스락은 유지되므로 비활성화
    } else if (button === "{close}") {
      closeKeyboard();
    } else {
      handleKeyPress(button);
      if (isShiftActive) {
        // 쉬프트 상태에서 글자를 입력한 경우, 다시 기본(default) 레이아웃으로 복귀
        setLayout("default");
        setIsShiftActive(false);
      }
    }

    focusInput(); // 입력 후 포커스 유지
  };
  return (
    <Wrapper className={isVisible ? "show" : ""}>
      <RKB
        layoutName={layout}
        layout={language === "kor" ? korLayout : engLayout}
        onKeyPress={onKeyPress}
        display={{
          "{bksp}": "⌫",
          "{shift}": isShiftActive ? "⬆" : "⇧",
          "{tab}": "tab",
          "{caps}": "CapsLk",
          "{enter}": "Enter ↵",
          "{space}": "Space",
          "{lan}": "🌐",
          "{close}": "⇩",
        }}
      />
    </Wrapper>
  );
};

export default Keyboard;
