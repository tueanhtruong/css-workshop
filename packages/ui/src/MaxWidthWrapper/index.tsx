/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import styles from "./MaxWidthWrapper.module.css";

export function MaxWidthWrapper({
  children,
  className = "",
  ...delegated
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"div">): JSX.Element {
  return (
    <div className={`${styles.maxWidthWrapper} ${className}`} {...delegated}>
      {children}
    </div>
  );
}
