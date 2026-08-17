import React, { useEffect, useState } from 'react';
import OnboardingWizard from './components/OnboardingWizard/OnboardingWizard';
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';

const ONBOARDING_HASH = '#onboarding';

const isOnboardingRoute = () => window.location.hash === ONBOARDING_HASH;

function App() {
  const [showWizard, setShowWizard] = useState(() => isOnboardingRoute());

  useEffect(() => {
    const syncFromHistory = () => {
      setShowWizard(isOnboardingRoute());
    };

    window.addEventListener('popstate', syncFromHistory);
    window.addEventListener('hashchange', syncFromHistory);

    return () => {
      window.removeEventListener('popstate', syncFromHistory);
      window.removeEventListener('hashchange', syncFromHistory);
    };
  }, []);

  const openWizard = () => {
    if (!isOnboardingRoute()) {
      window.history.pushState({ view: 'onboarding' }, '', ONBOARDING_HASH);
    }
    setShowWizard(true);
  };

  const backToLanding = () => {
    if (isOnboardingRoute()) {
      if (window.history.length > 1) {
        window.history.back();
        return;
      }
      window.history.replaceState({ view: 'landing' }, '', window.location.pathname + window.location.search);
    }
    setShowWizard(false);
  };

  return showWizard
    ? <OnboardingWizard onBackToLanding={backToLanding} />
    : <LandingPage onGetStarted={openWizard} />;
}

export default App;
