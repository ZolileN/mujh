import styles from './Hero.module.css';
import slider from '../assets/1slider-JOBE-Holdings.png'; // added background image import

export default function Hero() {
  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Planning Ahead for <span className={styles.highlight}>Affordable Funeral Cover</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Free yourself and loved ones from the financial burden in the event of an unfortunate death
        </p>
        <div className={styles.heroCta}>
          <button onClick={scrollToApply} className={styles.ctaPrimary}>
            Get Coverage Today
          </button>
          <button onClick={() => window.location.href = 'tel:0834682793'} className={styles.ctaSecondary}>
            Call Us Now
          </button>
        </div>
        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <svg className={styles.badgeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>FSP Licensed</span>
          </div>
          <div className={styles.badge}>
            <svg className={styles.badgeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Trusted by Thousands</span>
          </div>
          <div className={styles.badge}>
            <svg className={styles.badgeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Affordable Plans</span>
          </div>
        </div>
      </div>
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: `url(${slider})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className={styles.gradient}></div>
      </div>
    </section>
  );
}
