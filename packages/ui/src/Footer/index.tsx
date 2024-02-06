/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styles from "./footer.module.css";

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      All character assets taken from{" "}
      <a
        href="https://www.openpeeps.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Open Peeps
      </a>
      , by Pablo Stanley
    </footer>
  );
}
