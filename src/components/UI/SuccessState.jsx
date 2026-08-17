import React from 'react';
function SuccessState({ onStartOver }) {
  return (
    <main className="success-card" aria-labelledby="success-heading">
      <div className="success-icon" aria-hidden="true">✓</div>
      <p className="eyebrow">All set</p>
      <h1 id="success-heading">Onboarding complete!</h1>
      <p>Your account information has been successfully submitted. Thank you for completing your profile.</p>
      <button type="button" className="button button-primary" onClick={onStartOver}>Start over</button>
    </main>
  );
}

export default SuccessState;
