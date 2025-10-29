import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Have questions? Our team is here to help you find the right coverage for your family.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className={styles.contactTitle}>Phone</h3>
            <a href="tel:0834682793" className={styles.contactLink}>083 468 2793</a>
            <a href="tel:0536310297" className={styles.contactLink}>053 631 0297</a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={styles.contactTitle}>Business Hours</h3>
            <p className={styles.contactText}>Monday - Friday</p>
            <p className={styles.contactText}>8:00 AM - 5:00 PM</p>
            <p className={styles.contactText}>Saturday: 9:00 AM - 1:00 PM</p>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className={styles.contactTitle}>Head Office — De Aar</h3>

            <div className={styles.contactText}>
              <div>7 Voortrekker Street</div>
              <div>De Aar</div>
              <div>7000</div>
            </div>
          </div>
        </div>

        <div className={styles.mapWrapper} aria-hidden={false} style={{ marginTop: '1.25rem' }}>
          <iframe
            title="MU JOBE HOLDINGS Head Office - De Aar"
            src="https://www.google.com/maps?q=7+Voortrekker+St+De+Aar+7000&z=16&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, width: '100%', height: 300, borderRadius: 8 }}
          />
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>Ready to protect your family?</p>
          <button
            onClick={() => {
              const element = document.getElementById('apply');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className={styles.ctaButton}
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
