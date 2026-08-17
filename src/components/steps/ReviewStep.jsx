import React from 'react';
import { useFormContext } from 'react-hook-form';

function ReviewStep() {
  const { watch } = useFormContext();
  const { fullName, email, phone, username, password } = watch();

  const summarySections = [
    { title: 'Personal information', rows: [['Full name', fullName], ['Email address', email], ['Phone number', phone]] },
    { title: 'Account details', rows: [['Username', username], ['Password', password ? '••••••••' : 'Not set']] },
  ];

  return (
    <section className="step-panel" aria-labelledby="review-heading">
      <p className="eyebrow">Step 3</p>
      <h2 id="review-heading">Review your information</h2>
      <p className="step-intro">Please confirm these details before submitting your profile.</p>
      <div className="review-sections">
        {summarySections.map((section) => (
          <section className="review-section" key={section.title} aria-label={section.title}>
            <h3>{section.title}</h3>
            <dl>
              {section.rows.map(([label, value]) => (
                <div className="review-row" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
      <p className="security-note">Your password is masked for your privacy and is never stored in this demo.</p>
    </section>
  );
}

export default ReviewStep;
