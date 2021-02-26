// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "MuiSvgIcon-root jss172"
      )}
      viewBox={"0 0 24 24"}
      aria-hidden={"true"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2m13 2h-2.5A3.5 3.5 0 0012 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 011-1h2V5z"
        }
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
