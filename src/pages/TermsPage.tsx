import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './TermsPage.module.css';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className={styles.termsPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <Link to="/" className={styles.backLink}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className={styles.title}>Terms & Conditions</h1>
            <p className={styles.lastUpdated}>Last Updated: October 2025</p>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Introduction</h2>
              <p className={styles.paragraph}>
                These Terms and Conditions govern your use of MU JOBE Holdings financial services and
                funeral cover products. By applying for or using our services, you agree to be bound by
                these terms.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Eligibility</h2>
              <p className={styles.paragraph}>
                To be eligible for our funeral cover products, you must:
              </p>
              <ul className={styles.list}>
                <li>Be a South African citizen or permanent resident</li>
                <li>Be at least 18 years of age</li>
                <li>Provide valid identification documentation</li>
                <li>Complete the application form truthfully and accurately</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Coverage Details</h2>
              <p className={styles.paragraph}>
                Our funeral cover policies provide financial assistance to help families manage funeral
                expenses. Coverage details include:
              </p>
              <ul className={styles.list}>
                <li>Coverage amounts ranging from R20,000 to R100,000</li>
                <li>Monthly premium payments based on selected coverage</li>
                <li>Waiting periods may apply to new policies</li>
                <li>Coverage for specified beneficiaries</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Premium Payments</h2>
              <p className={styles.paragraph}>
                Premium payments are required to maintain active coverage:
              </p>
              <ul className={styles.list}>
                <li>Premiums are payable monthly in advance</li>
                <li>Payment methods will be confirmed upon policy approval</li>
                <li>Grace periods apply for late payments</li>
                <li>Coverage may lapse if premiums are not paid</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Claims Process</h2>
              <p className={styles.paragraph}>
                In the event of a covered death, beneficiaries must:
              </p>
              <ul className={styles.list}>
                <li>Notify MU JOBE Holdings within 30 days</li>
                <li>Provide required documentation including death certificate</li>
                <li>Complete claims forms as directed</li>
                <li>Claims will be paid within 48 hours of receiving complete documentation. Submit claims to: <a href="mailto:claims@mujh.co.za">claims@mujh.co.za</a></li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. ID Numbers & Beneficiary Rules</h2>
              <p className={styles.paragraph}>
                ID numbers must be correct; an incorrect ID number will not be corrected at the claim stage.
                The company will not pay out the claim if ID numbers are incorrect.
              </p>
              <ul className={styles.list}>
                <li>Persons covered are not required to share the same surname as the main member.</li>
                <li>One person / ID number cannot be covered by more than two people.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Waiting Periods & Admin Fee</h2>
              <p className={styles.paragraph}>
                Waiting periods apply as follows:
              </p>
              <ul className={styles.list}>
                <li>Standard waiting period is 6 months (an administration fee of R150.00 is payable once).</li>
                <li>Waiting period is 6 months for ages 10 – 84 years. Clients above 84 years have a waiting period of 9 months.</li>
                <li>Unnatural deaths (accidents) have no waiting period and no double payment applies.</li>
                <li>Suicide has a waiting period of 2 years.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Payments & Bank Details</h2>
              <p className={styles.paragraph}>
                Monthly premiums may be paid by cash deposit, electronic transfer, stop order, debit order, or EasyPay.
                Payments will be deposited into the company's business bank account:
              </p>
              <ul className={styles.list}>
                <li>Account Name: MU JOBE HOLDINGS (PTY) LTD</li>
                <li>Bank: Standard Bank</li>
                <li>Account No: 280561857</li>
                <li>Branch Code: 050208</li>
                <li>Reference: Principal Member’s ID Number</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>9. Policy Documents & Lapse</h2>
              <p className={styles.paragraph}>
                Policy documents with full terms and information will be sent within two weeks after taking the policy.
                Should you miss or skip two consecutive premiums, the policy will lapse and will not be refunded.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>10. Cancellation and Refunds</h2>
              <p className={styles.paragraph}>
                You may cancel your policy at any time by providing written notice. Refund policies
                for unused premiums will be handled on a case-by-case basis according to the policy
                terms and applicable regulations.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>11. Privacy and Data Protection</h2>
              <p className={styles.paragraph}>
                We are committed to protecting your personal information in accordance with the
                Protection of Personal Information Act (POPIA). Your data will be:
              </p>
              <ul className={styles.list}>
                <li>Used only for policy administration and claims processing</li>
                <li>Protected with appropriate security measures</li>
                <li>Not shared with third parties without consent, except as required by law</li>
                <li>Retained in accordance with regulatory requirements</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>12. Disclaimers</h2>
              <p className={styles.paragraph}>
                MU JOBE Holdings is a licensed Financial Services Provider operating under South African
                regulations. While we strive to provide accurate information, policy terms may vary based
                on individual circumstances. Final terms will be provided in your policy documentation.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>13. Changes to Terms</h2>
              <p className={styles.paragraph}>
                We reserve the right to modify these terms and conditions. Policyholders will be notified
                of significant changes. Continued use of our services after changes constitutes acceptance
                of the modified terms.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>14. Contact Information</h2>
              <p className={styles.paragraph}>
                For questions about these terms or our services, please contact us:
              </p>
              <ul className={styles.list}>
                <li>Mobile: 083 468 2793</li>
                <li>Landline: 053 631 0297</li>
                <li>Claims email: <a href="mailto:claims@mujh.co.za">claims@mujh.co.za</a></li>
              </ul>
            </section>
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              By submitting an application, you acknowledge that you have read, understood, and agree
              to these Terms and Conditions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
