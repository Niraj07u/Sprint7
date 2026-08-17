import React from 'react';
import FormField from '../FormField/FormField';

function PersonalInfoStep() {
  return (
    <section className="step-panel" aria-labelledby="personal-heading">
      <p className="eyebrow">Step 1</p>
      <h2 id="personal-heading">Personal information</h2>
      <p className="step-intro">A few details help us personalize your OnboardFlow workspace.</p>
      <div className="fields-grid">
        <FormField name="fullName" label="Full name" placeholder="e.g. Niraj Sharma" autoComplete="name" />
        <FormField name="email" label="Email address" type="email" placeholder="you@company.com" autoComplete="email" inputMode="email" />
        <FormField name="phone" label="Phone number" type="tel" placeholder="+91 98765 43210" autoComplete="tel" inputMode="tel" />
      </div>
    </section>
  );
}

export default PersonalInfoStep;
