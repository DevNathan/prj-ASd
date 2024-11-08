import React, { createContext, useContext, useState } from "react";

type LoadingScreenContextType = {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
};

const LoadingScreenContext = createContext<
  LoadingScreenContextType | undefined
>(undefined);

export const useLoadingScreen = () => {
  const context = useContext(LoadingScreenContext);
  if (!context) {
    throw new Error("올바르지 않은 로딩 스크린 컨텍스트 사용");
  }
  return context;
};

export const LoadingScreenProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <LoadingScreenContext.Provider value={{ isVisible, show, hide, toggle }}>
      {children}
    </LoadingScreenContext.Provider>
  );
};
