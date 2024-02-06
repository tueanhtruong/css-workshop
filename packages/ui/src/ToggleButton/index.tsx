/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/button-has-type */
import styles from "./toggleButton.module.css";

export function ToggleButton({
  label,
  color,
  children,
  isSelected,
  ...delegated
}: {
  label: string;
  color?: string;
  children: React.ReactNode;
  isSelected: boolean;
} & React.ComponentProps<"button">): JSX.Element {
  return (
    <button
      {...delegated}
      aria-pressed={isSelected}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      className={styles.toggleButton}
      style={{ backgroundColor: color }}
    >
      <span className="visually-hidden">{label}</span>
      {children}
    </button>
  );
}
