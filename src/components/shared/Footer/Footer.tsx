import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Future World © {new Date().getFullYear()}</p>
    </footer>
  );
};
