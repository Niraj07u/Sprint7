import React, { useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountDetailsSchema, defaultValues, onboardingSchema, personalInfoSchema } from '../../schemas/onboardingSchema';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import PersonalInfoStep from '../steps/PersonalInfoStep';
import AccountDetailsStep from '../steps/AccountDetailsStep';
import ReviewStep from '../steps/ReviewStep';
import SuccessState from '../UI/SuccessState';
import prodeskLogo from '../../../Assets/Images/Prodesk.png';

const stepFields = {
  1: ['fullName', 'email', 'phone'],
  2: ['username', 'password', 'confirmPassword'],
};

function OnboardingWizard({ onBackToLanding }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const methods = useForm({
    resolver: zodResolver(onboardingSchema),
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldUnregister: false,
  });
  const { trigger, handleSubmit, reset, control } = methods;
  const values = useWatch({ control });
  const personalStepValid = personalInfoSchema.safeParse({
    fullName: values.fullName ?? '', email: values.email ?? '', phone: values.phone ?? '',
  }).success;
  const accountStepValid = accountDetailsSchema.safeParse({
    username: values.username ?? '', password: values.password ?? '', confirmPassword: values.confirmPassword ?? '',
  }).success;
  const fullFormValid = onboardingSchema.safeParse(values).success;

  const goNext = async () => {
    const valid = await trigger(stepFields[currentStep], { shouldFocus: true });
    if (valid) setCurrentStep((step) => Math.min(step + 1, 3));
  };

  const goBack = () => setCurrentStep((step) => Math.max(step - 1, 1));

  const submit = (data) => {
    // Demo-only logging requirement. Passwords are neither persisted nor sent anywhere.
    console.log('Final onboarding payload (demo only):', data);
    setIsSubmitted(true);
  };

  const startOver = () => {
    reset(defaultValues);
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <main className="app-shell success-shell">
        <SuccessState onStartOver={startOver} />
      </main>
    );
  }

  const nextDisabled = currentStep === 1 ? !personalStepValid : !accountStepValid;

  return (
    <main className="app-shell">
      <header className="wizard-topbar">
        <a className="brand" href="#onboarding" aria-label="OnboardFlow home"><span className="brand-mark" aria-hidden="true"><img src={prodeskLogo} alt="" /></span>OnboardFlow</a>
        <button type="button" className="home-link" onClick={onBackToLanding}>← Back to Home</button>
      </header>

      <section className="wizard-card" aria-label="OnboardFlow onboarding wizard">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submit)} noValidate className="wizard-form">
            <div className="wizard-layout">
              <div className="wizard-main">
                <section className="wizard-hero" aria-labelledby="onboarding">
                  <div className="hero-badge" aria-hidden="true"><img src={prodeskLogo} alt="" /></div>
                  <div>
                    <h1 id="onboarding">Complete your profile in a few <span>simple steps.</span></h1>
                    <p>Let&apos;s get started with your basic information.</p>
                  </div>
                </section>

                <div className="step-content" key={currentStep}>
                  {currentStep === 1 && <PersonalInfoStep />}
                  {currentStep === 2 && <AccountDetailsStep />}
                  {currentStep === 3 && <ReviewStep />}
                </div>

                <div className="form-actions">
                  {currentStep > 1 ? (
                    <button type="button" className="button button-secondary" onClick={goBack}>← Back</button>
                  ) : (
                    <button type="button" className="button button-secondary" onClick={onBackToLanding}>← Back to Home</button>
                  )}
                  {currentStep < 3 ? (
                    <button type="button" className="button button-primary" onClick={goNext} disabled={nextDisabled}>Next Step <span aria-hidden="true">→</span></button>
                  ) : (
                    <button type="submit" className="button button-primary" disabled={!fullFormValid}>Submit <span aria-hidden="true">✓</span></button>
                  )}
                </div>
              </div>

              <aside className="wizard-side" aria-label="Progress and security details">
                <ProgressIndicator currentStep={currentStep} />
                <div className="wizard-side-visual" aria-hidden="true">
                  <div className="glow-orb" />
                  <div className="visual-card">📋</div>
                  <div className="visual-note">🔐</div>
                  <div className="visual-plant">🌿</div>
                </div>
                <section className="trust-card" aria-label="Security information">
                  <h2>Your data is safe with us</h2>
                  <p>We use industry-standard security practices to protect your information.</p>
                  <ul>
                    <li>Secure Encryption</li>
                    <li>Private &amp; Confidential</li>
                    <li>GDPR Compliant</li>
                  </ul>
                </section>
              </aside>
            </div>
          </form>
        </FormProvider>
      </section>
      <p className="privacy-footer">🛡 Trusted by <strong>10,000+</strong> users worldwide</p>
    </main>
  );
}

export default OnboardingWizard;
