import React from "react";
import { IconType } from "@/assets/icons/IconType";

const BackIcon = ({ fill, width, height, ...props }: IconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 18.502C11.256 18.502 11.512 18.405 11.707 18.21C11.902 18.014 12 17.758 12 17.502V14.943C16.5 14.445 20 10.634 20 6.00195V5.00195C17.755 8.42495 14.75 8.92195 12 8.99095V6.50195C12 6.24695 11.902 5.98995 11.707 5.79495C11.512 5.59995 11.256 5.50195 11 5.50195C10.744 5.50195 10.488 5.59995 10.293 5.79495L4 12.002L10.293 18.21C10.488 18.405 10.744 18.502 11 18.502Z"
        fill={fill}
      />
    </svg>
  );
};

export default BackIcon;
