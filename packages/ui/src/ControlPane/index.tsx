/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ButtonRow, ToggleButton } from "..";
import type { Callback, ControlOption } from "../types";
import styles from "./controlPane.module.css";

export function ControlPane({
  title,
  //   type,
  options,
  currentOption,
  handleSelectOption,
}: {
  options: ControlOption[];
  title: string;
  currentOption?: string | number;
  type?: string;
  handleSelectOption: Callback;
}): JSX.Element {
  return (
    <div className={styles.controlPane}>
      <h2 className={styles.title}>
        {title}

        <span className={styles.metadata}>{options.length} options</span>
      </h2>
      <ButtonRow>
        {options.map(({ id, label, color, children }) => (
          <ToggleButton
            color={color}
            isSelected={currentOption === id}
            key={id}
            label={label}
            onClick={() => {
              handleSelectOption(id);
            }}
          >
            {children}
          </ToggleButton>
        ))}
      </ButtonRow>
    </div>
  );
}
