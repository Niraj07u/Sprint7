import React from 'react';
import FormField from '../FormField/FormField';
import PasswordField from '../PasswordField/PasswordField';

function AccountDetailsStep() {
  return (
    <section className="step-panel" aria-labelledby="account-heading">
      <p className="eyebrow">Step 2</p>
      <h2 id="account-heading">Account details</h2>
      <p className="step-intro">Choose the credentials you will use to access your workspace.</p>
      <div className="fields-grid">
        <FormField name="username" label="Username" placeholder="niraj_sharma" autoComplete="username" />
        <PasswordField name="password" label="Password" autoComplete="new-password" />
        <PasswordField name="confirmPassword" label="Confirm password" autoComplete="new-password" />
      </div>
      <p className="input-hint">Use at least 8 characters for your password.</p>
    </section>
  );
}

export default AccountDetailsStep;
