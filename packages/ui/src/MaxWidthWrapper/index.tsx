/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import "./maxWidthWrapper.css";

export function MaxWidthWrapper({
  children,
  className = "",
  ...delegated
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"div">): JSX.Element {
  return (
    <div className={`maxWidthWrapper ${className}`} {...delegated}>
      {children}
    </div>
  );
}
