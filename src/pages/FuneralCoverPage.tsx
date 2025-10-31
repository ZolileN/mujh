import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import styles from '../components/FuneralCoverPage.module.css';

const FuneralCoverPage: React.FC = () => {
  const navigate = useNavigate();

  const coverOptions = [
    {
      id: 'option-a',
      title: 'Option A - Family Plan',
      description: '1+9 (Main Member plus 9 Family Members)',
      benefits: [
        '2 members covered for R20 000 (age 10 – 64 years)',
        '8 members covered for R10 000 (no age limit)'
      ],
      price: 'R390.00 per month',
      bestValue: true
    },
    {
      id: 'option-b',
      title: 'Option B - Family Plan',
      description: '1+4 (Main Member plus 4 Family Members)',
      benefits: [
        '2 members covered for R15 000 (age 10 – 64 years)',
        '3 members covered for R10 000 (age 0 – 84 years)'
      ],
      price: 'R290.00 per month',
      bestValue: false
    },
    {
      id: 'option-c',
      title: 'Option C - Family Plan',
      description: '1+2 (Main Member plus 2 Family Members)',
      benefits: [
        '1 member covered for R15 000 (age 10 – 64 years)',
        '2 members covered for R10 000 (age 0 – 84 years)'
      ],
      price: 'R200.00 per month',
      bestValue: false
    },
    {
      id: 'option-d',
      title: 'Option D - Couple Plan',
      description: '1+1 (Main Member plus 1 Family Member)',
      benefits: [
        'Main member covered for R15 000',
        '1 family member covered for R10 000',
        'No age limit'
      ],
      price: 'R170.00 per month',
      bestValue: false
    },
    {
      id: 'option-e',
      title: 'Option E - Individual Plan',
      description: 'Individual coverage up to R50,000',
      benefits: [
        '18-64 years: R280 per month',
        '65-74 years: R480 per month',
        '75-84 years: R600 per month',
        '85-100 years: R1,000 per month'
      ],
      price: 'From R280 per month',
      bestValue: false
    },
    {
      id: 'option-f',
      title: 'Option F - Group Plan',
      description: 'R10,000 Cover',
      benefits: [
        '18-64 years: R60 per month',
        '65-74 years: R130 per month',
        '75-84 years: R200 per month',
        '85-100 years: R300 per month'
      ],
      price: 'From R60 per month',
      bestValue: false
    }
  ];

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    // Store the current scroll position
    sessionStorage.setItem('shouldScrollToForm', 'true');
    navigate('/');
  };

  return (
    <>
      <main className={styles.container}>
        <Link to="/" className={styles.backLink}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        
        <section className={styles.hero}>
          <h1>Funeral Cover Options</h1>
          <p>Choose the plan that best suits your family's needs and budget</p>
        </section>

        <div className={styles.grid}>
          {coverOptions.map((option) => (
            <div key={option.id} className={`${styles.card} ${option.bestValue ? styles.highlight : ''}`}>
              {option.bestValue && <div className={styles.bestValue}>Best Value</div>}
              <h2>{option.title}</h2>
              <p className={styles.description}>{option.description}</p>
              <div className={styles.price}>{option.price}</div>
              <ul className={styles.benefits}>
                {option.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <button 
                onClick={handleGetStarted}
                className={styles.ctaButton}
              >
                Get Cover
              </button>
            </div>
          ))}
        </div>

        <section className={styles.contactSection}>
          <h2>Need Help Choosing?</h2>
          <p>Our team is ready to help you select the perfect plan for your family's needs.</p>
          <div className={styles.contactButtons}>
            <a href="tel:0834682793" className={styles.phoneButton}>
              Call Us: 083 468 2793
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FuneralCoverPage;
