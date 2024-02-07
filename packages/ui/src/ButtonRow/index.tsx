import React from "react";
import "./buttonRow.css";
export function ButtonRow({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="overflow-auto">
      <div className="button-row">{children}</div>
    </div>
  );
}
