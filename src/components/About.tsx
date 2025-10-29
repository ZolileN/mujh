import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About MU JOBE Holdings</h2>
          <p className={styles.mission}>
            MU JOBE Holdings financial service provides active clients with quality and affordable
            financial products, and offers world class financial services to the people of South Africa.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5000+</div>
              <div className={styles.statLabel}>Active Clients</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
