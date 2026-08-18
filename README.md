# OnboardFlow — Multi-Step Onboarding Wizard

OnboardFlow is a polished SaaS-style, three-step onboarding experience built for Sprint 7. It guides a user through personal details, account setup, and a final review without losing data between steps.

## Engineering objective

Demonstrate a production-minded React multi-step form using one centralized form payload, real-time schema validation, accessible interactions, and responsive design.

## Features

- Three logical, conditionally rendered steps: Personal Information, Account Details, and Review & Submit
- React Hook Form as the single source of truth for all form data
- Zod validation through `zodResolver`, including regex checks and password confirmation refinement
- Real-time validation with step-specific disabled Next buttons
- Data retained during forward and backward navigation
- Dynamic progress bar and completed/current/upcoming step indicators
- Show/hide controls for both password fields
- Privacy-conscious review screen that never shows the raw password
- Success screen with a safe React Hook Form `reset()` flow
- Semantic, keyboard-friendly, responsive UI with visible focus and error states

## Sprint phases covered

- **Phase 1 / P0:** Conditional rendering, three-step navigation, preserved form data, review, and success state.
- **Phase 2 / P1:** On-change validation, regex validation, disabled actions, password toggles, dynamic progress, and responsive UI.
- **Phase 3 / P2:** React Hook Form + FormProvider architecture, Zod resolver and cross-field validation, accessibility polish, and form reset.

## Tech stack

- React + Vite
- React Hook Form
- Zod
- `@hookform/resolvers`
- CSS3

## Project structure

```text
src/
├── components/
│   ├── FormField/FormField.jsx
│   ├── OnboardingWizard/OnboardingWizard.jsx
│   ├── PasswordField/PasswordField.jsx
│   ├── ProgressIndicator/ProgressIndicator.jsx
│   ├── steps/
│   │   ├── AccountDetailsStep.jsx
│   │   ├── PersonalInfoStep.jsx
│   │   └── ReviewStep.jsx
│   └── UI/SuccessState.jsx
├── schemas/onboardingSchema.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Installation

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Validation and navigation

The wizard uses `useForm`, `FormProvider`, `useFormContext`, `useWatch`, `trigger`, `handleSubmit`, and `reset`. Zod owns all validation rules. Each Next action validates only the active step's fields; the review screen is derived directly from the form state. The final submission logs a clearly labeled demo payload to the browser console and shows the success state. No values, including passwords, are persisted to local storage.

## 🌐 Live Demo

🚀 **Live Deployment:** [View OnboardFlow Live](https://sprint7-phi.vercel.app/)

## Sprint objective

Deliver a complete, accessible, responsive onboarding form while keeping credentials in memory only for this frontend demo.

#  Author

**Niraj Sharma**

**B.Tech Computer Science Engineering (AI & ML)**

Roorkee Institute of Technology

GitHub

https://github.com/Niraj07u


## License

This project was developed for educational and internship purposes as part of the **Prodesk IT Sprint 07 Assignment**.


Your support is greatly appreciated and motivates future improvements.
