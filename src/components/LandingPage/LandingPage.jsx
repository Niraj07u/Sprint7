import React from 'react';
import './LandingPage.css';
import person1 from '../../../Assets/Images/person1.png';
import person2 from '../../../Assets/Images/person2.png';
import person3 from '../../../Assets/Images/person3.png';
import person4 from '../../../Assets/Images/person4.png';
import prodeskLogo from '../../../Assets/Images/Prodesk.png';

const Icon = ({ name, size = 24 }) => {
  const icons = {
    user: <><circle cx="12" cy="8" r="3.3" /><path d="M5.5 20c.7-3.4 3-5.2 6.5-5.2s5.8 1.8 6.5 5.2" /></>,
    mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4.5 7 7.5 5.6L19.5 7" /></>,
    phone: <path d="M7.2 3.9 5.4 5.1c-.9.6-1 1.8-.5 3.2 1.5 4 4.5 7 8.5 8.5 1.4.5 2.6.4 3.2-.5l1.2-1.8-3.1-2.1-1.1 1.3c-1.8-.7-3.6-2.5-4.3-4.3l1.3-1.1-2.1-3.1Z" />,
    calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M7.5 3v4M16.5 3v4M3.5 10h17M8 14h.1M12 14h.1M16 14h.1" /></>,
    arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
    play: <><circle cx="12" cy="12" r="8.5" /><path d="m10 8.8 5 3.2-5 3.2Z" /></>,
    flow: <><circle cx="6" cy="5" r="2.5" /><circle cx="18" cy="12" r="2.5" /><circle cx="6" cy="19" r="2.5" /><path d="M8.5 5h3.7a3 3 0 0 1 3 3v1.5M8.5 19h3.7a3 3 0 0 0 3-3v-1.5" /></>,
    shield: <><path d="M12 3 20 6v5.4c0 4.7-3.2 7.5-8 9.6-4.8-2.1-8-4.9-8-9.6V6l8-3Z" /><path d="m8.6 12 2.2 2.2 4.7-5" /></>,
    lock: <><rect x="4.5" y="10" width="15" height="10" rx="2" /><path d="M8 10V7.5a4 4 0 0 1 8 0V10M12 14v2" /></>,
    award: <><circle cx="12" cy="10" r="5.5" /><path d="m8.5 15-1 5 4.5-2.3 4.5 2.3-1-5M10 10l1.4 1.4 2.8-2.8" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
};

const formFields = [
  ['Full Name', 'Enter your full name', 'user'], ['Email Address', 'Enter your email', 'mail'],
  ['Phone Number', 'Enter your phone number', 'phone'], ['Date of Birth', 'Select your date of birth', 'calendar'],
];

const featureCards = [
  ['flow', 'Step-by-Step Flow', 'Guided onboarding in 3 simple steps.', 'lavender'],
  ['shield', 'Real-time Validation', 'Instant feedback to keep you on track.', 'blue'],
  ['lock', 'Secure & Reliable', 'Industry standard security to protect your data.', 'mint'],
  ['award', 'Success Guaranteed', 'Complete onboarding with confidence.', 'peach'],
];

function LandingPage({ onGetStarted }) {
  return (
    <main className="landing-page">
      <header className="landing-nav">
        <a className="landing-logo" href="#top" aria-label="OnboardFlow home">
          <img className="logo-symbol-image" src={prodeskLogo} alt="Prodesk logo" />
          <span>Prodesk<span>IT</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#features">Features</a><a href="#how-it-works">How It Works</a><a href="#why">Why OnboardFlow</a><a href="#testimonials">Testimonials</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a>
        </nav>
        <div className="nav-actions"><a href="#login">Log in</a><button type="button" onClick={onGetStarted}>Get Started Free</button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="hero-pill"><span>✦</span> Smart Onboarding Experience</p>
          <h1>Onboarding<br />Made Simple.<br /><em>Done Right.</em></h1>
          <p className="hero-description">OnboardFlow helps you create a seamless onboarding experience. A step-by-step process that’s easy, intuitive and built for success.</p>
          <div className="hero-actions"><button type="button" className="journey-button" onClick={onGetStarted}>Start Your Journey <Icon name="arrow" size={19} /></button></div>
          <div className="social-proof">
            <div className="avatar-stack" aria-label="Happy customers"><span className="avatar avatar-one"><img src={person1} alt="Customer 1" /></span><span className="avatar avatar-two"><img src={person2} alt="Customer 2" /></span><span className="avatar avatar-three"><img src={person3} alt="Customer 3" /></span><span className="avatar avatar-four"><img src={person4} alt="Customer 4" /></span></div>
            <span className="users-count">10K+</span><p><strong>Join 10,000+ happy users</strong><br />who trust OnboardFlow</p>
          </div>
        </div>

        <div className="hero-art" aria-label="Onboarding form preview">
          <div className="art-orb" /><div className="dotted-grid" />
          <div className="paper-plane">➤</div>
          <div className="desk-scene"><div className="plant"><i /><i /><i /><i /></div><div className="laptop"><span /><b /></div><div className="desk-pen" /></div>
          <div className="clipboard-scene"><div className="clipboard"><b>✓</b><b>✓</b><b>✓</b><i /><i /><i /></div><div className="scene-plant"><i /><i /><i /></div></div>
          <div className="preview-card">
            <div className="preview-steps"><div className="preview-step current"><b>1</b><span>Personal Info</span></div><i /><div className="preview-step"><b>2</b><span>Account Details</span></div><i /><div className="preview-step"><b>3</b><span>Review &amp; Submit</span></div></div>
            <div className="preview-form">
              <h2>Personal Information</h2><p>Let's get to know you better</p>
              <div className="preview-fields">{formFields.map(([label, placeholder, icon]) => <label key={label}>{label}<span><Icon name={icon} size={17} />{placeholder}</span></label>)}</div>
              <button type="button" onClick={onGetStarted}>Next Step <Icon name="arrow" size={17} /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-strip" id="features">
        {featureCards.map(([icon, title, description, tone]) => <article key={title}><span className={`feature-icon ${tone}`}><Icon name={icon} size={31} /></span><div><h2>{title}</h2><p>{description}</p></div></article>)}
      </section>

      <section className="trusted" id="why"><p>Trusted by industry leaders</p><div><strong>🚀 LaunchPad</strong><strong>☁ CloudSync</strong><strong>▮▮▮ DataPro</strong><strong>⬡ TechNova</strong><strong>ⓦ Workly</strong></div></section>
    </main>
  );
}

export default LandingPage;
