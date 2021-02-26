// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownloadsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownloadsvgIcon(props: DownloadsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 30.4 22.9"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.8 14.6l4-1.5c.1-.1.3.1.2.2l-3.6 9c-.1.3.1.5.4.5h2c.9 0 1.6-.5 2-1.3l5.7-14.3c.1-.3-.2-.6-.5-.5l-9.6 3.7c-.1 0-.3 0-.4-.1l-4.7-4.1c-.2-.2-.5-.1-.6.1l-2.8 7.1c-.1.2-.3.4-.6.4H5.2c-.3 0-.4-.3-.3-.5L10 .5c.1-.3-.1-.5-.3-.5H7.6C6.8 0 6 .5 5.7 1.3l-5.5 14c-.4 1.1.4 2.3 1.6 2.3H13c.8 0 1.6-.5 1.9-1.3l1.6-3.9c0-.1.2-.1.3-.1l2.5 2.2c-.1.2.2.2.5.1"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DownloadsvgIcon;
/* prettier-ignore-end */
