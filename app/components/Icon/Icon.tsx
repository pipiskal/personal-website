import React from "react";

import Icons from "./Icons/index";

const iconSizes = {
  sm: 14,
  md: 22,
  lg: 27,
  xl: 34,
  xxl: 188,
};

type IconProps = {
  name: keyof typeof Icons;
  w?: number;
  h?: number;
  size?: keyof typeof iconSizes;
  onClick?: () => void;
  hasCursor?: boolean;
  className?: string;
};

const Icon = ({
  className,
  h,
  hasCursor,
  name,
  onClick,
  size,
  w,
}: IconProps) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        cursor: onClick || hasCursor ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: w,
        height: h,
      }}
    >
      {Icons[name]({
        width: size ? iconSizes[size] : w,
        height: size ? iconSizes[size] : h,
      })}
    </div>
  );
};

export default Icon;
