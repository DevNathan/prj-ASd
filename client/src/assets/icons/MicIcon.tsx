import React from "react";
import { IconType } from "@/assets/icons/IconType";

const MicIcon = ({ fill, height, width, ...props }: IconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M192 448H320"
        stroke={fill}
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M384 208V240C384 310.4 326.4 368 256 368C185.6 368 128 310.4 128 240V208"
        stroke={fill}
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M256 368V448"
        stroke={fill}
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M256 64.0008C247.584 63.9584 239.242 65.5849 231.458 68.7862C223.674 71.9874 216.602 76.7 210.651 82.6514C204.699 88.6029 199.987 95.675 196.785 103.459C193.584 111.243 191.958 119.584 192 128.001V239.001C192 274.201 221 304.001 256 304.001C291 304.001 320 275.001 320 239.001V128.001C320 92.0008 292 64.0008 256 64.0008Z"
        stroke={fill}
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MicIcon;
