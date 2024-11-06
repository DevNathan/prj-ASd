import React from "react";
import { IconType } from "@/assets/icons/IconType";

const KeyboardIcon = ({ fill, width, height, ...props }: IconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31 7H1V25H31V7Z"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M7 11H5"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M11 11H9"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M15 11H13"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M19 11H17"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M23 11H21"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M27 11H25"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M7 16H5"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M11 16H9"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M15 16H13"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M19 16H17"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M23 16H21"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M27 16H25"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M7 21H5"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M23 21H9"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M27 21H25"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KeyboardIcon;
