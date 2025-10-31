import { useState, type FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import styles from './ApplicationForm.module.css';

interface FormData {
  firstName: string;
  lastName: string;
  idNumber: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  coverageAmount: string;
  beneficiaryName: string;
  beneficiaryRelation: string;
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    idNumber: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    coverageAmount: '',
    beneficiaryName: '',
    beneficiaryRelation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('applications')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            id_number: formData.idNumber,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            province: formData.province,
            postal_code: formData.postalCode,
            coverage_amount: formData.coverageAmount,
            beneficiary_name: formData.beneficiaryName,
            beneficiary_relation: formData.beneficiaryRelation,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        idNumber: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        coverageAmount: '',
        beneficiaryName: '',
        beneficiaryRelation: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className={styles.applicationSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Apply for Coverage</h2>
        <p className={styles.subtitle}>
          Complete the form below to start your application. Our team will contact you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Personal Information</h3>
            <div className={styles.grid}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.label}>First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName" className={styles.label}>Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="idNumber" className={styles.label}>ID Number *</label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  maxLength={13}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Address</h3>
            <div className={styles.grid}>
              <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
                <label htmlFor="address" className={styles.label}>Street Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="city" className={styles.label}>City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="province" className={styles.label}>Province *</label>
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  className={styles.input}
                >
                  <option value="">Select Province</option>
                  <option value="Eastern Cape">Eastern Cape</option>
                  <option value="Free State">Free State</option>
                  <option value="Gauteng">Gauteng</option>
                  <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                  <option value="Limpopo">Limpopo</option>
                  <option value="Mpumalanga">Mpumalanga</option>
                  <option value="Northern Cape">Northern Cape</option>
                  <option value="North West">North West</option>
                  <option value="Western Cape">Western Cape</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="postalCode" className={styles.label}>Postal Code *</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  maxLength={4}
                />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Coverage Details</h3>
            <div className={styles.grid}>
              <div className={styles.formGroup}>
                <label htmlFor="coverageAmount" className={styles.label}>Coverage Amount *</label>
                <select
                  id="coverageAmount"
                  name="coverageAmount"
                  value={formData.coverageAmount}
                  onChange={handleChange}
                  required
                  className={styles.input}
                >
                  <option value="">Select Coverage</option>
                  <option value="R10000">R10,000</option>
                  <option value="R20000">R20,000</option>
                  <option value="R30000">R30,000</option>
                  <option value="R50000">R50,000</option>
                  <option value="R75000">R75,000</option>
                  <option value="R100000">R100,000</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Beneficiary Information</h3>
            <div className={styles.grid}>
              <div className={styles.formGroup}>
                <label htmlFor="beneficiaryName" className={styles.label}>Beneficiary Full Name *</label>
                <input
                  type="text"
                  id="beneficiaryName"
                  name="beneficiaryName"
                  value={formData.beneficiaryName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="beneficiaryRelation" className={styles.label}>Relationship *</label>
                <select
                  id="beneficiaryRelation"
                  name="beneficiaryRelation"
                  value={formData.beneficiaryRelation}
                  onChange={handleChange}
                  required
                  className={styles.input}
                >
                  <option value="">Select Relationship</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Child">Child</option>
                  <option value="Parent">Parent</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className={styles.successMessage}>
              Application submitted successfully! We'll contact you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>
              Error: {errorMessage}. Please try again or contact us directly.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </section>
  );
}
