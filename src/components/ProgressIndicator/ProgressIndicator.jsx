import React from 'react';
const steps = [
  { number: 1, shortLabel: 'Personal', label: 'Personal information' },
  { number: 2, shortLabel: 'Account', label: 'Account details' },
  { number: 3, shortLabel: 'Review', label: 'Review & submit' },
];

function ProgressIndicator({ currentStep }) {
  const progress = currentStep * 100 / steps.length;

  return (
    <nav className="progress" aria-label={`Onboarding progress: step ${currentStep} of 3`}>
      <div className="progress-meta"><span>Step {currentStep} of 3</span><span>{Math.round(progress)}% complete</span></div>
      <div className="progress-track" aria-hidden="true"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
      <ol className="step-list">
        {steps.map((step) => {
          const status = step.number < currentStep ? 'complete' : step.number === currentStep ? 'current' : 'upcoming';
          return (
            <li className={`step-item ${status}`} key={step.number} aria-current={status === 'current' ? 'step' : undefined}>
              <span className="step-badge">{status === 'complete' ? '✓' : step.number}</span>
              <span className="step-label"><span className="desktop-label">{step.label}</span><span className="mobile-label">{step.shortLabel}</span></span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default ProgressIndicator;
