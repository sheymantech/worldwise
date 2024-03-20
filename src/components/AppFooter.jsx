import styles from "./AppFooter.module.css";

function AppFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; copyright {new Date().getFullYear()} by worldwise Inc.
      </p>
    </footer>
  );
}

export default AppFooter;
