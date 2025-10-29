import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.logo}>MU JOBE Holdings</h3>
            <p className={styles.description}>
              Providing quality and affordable funeral cover to South African families.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/terms" className={styles.link}>Terms & Conditions</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <a href="tel:0834682793" className={styles.link}>083 468 2793</a>
            <a href="tel:0536310297" className={styles.link}>053 631 0297</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} MU JOBE Holdings. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            Licensed Financial Services Provider
          </p>
        </div>
      </div>
    </footer>
  );
}
