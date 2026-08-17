import React, { useId, useState } from 'react';
import { useFormContext } from 'react-hook-form';

function PasswordField({ name, label, autoComplete }) {
  const [visible, setVisible] = useState(false);
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <div className={`field-group field-${name}`}>
      <label htmlFor={inputId}>{label}</label>
      <div className={error ? 'password-control input-shell is-invalid' : 'password-control input-shell'}>
        <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4.5" y="10" width="15" height="10" rx="2" />
          <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
        </svg>
        <input
          id={inputId}
          className="field-input"
          type={visible ? 'text' : 'password'}
          placeholder="Enter your password"
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...register(name)}
        />
        <button
          className="password-toggle"
          type="button"
          onClick={() => setVisible((current) => !current)}
          aria-label={`${visible ? 'Hide' : 'Show'} ${label.toLowerCase()}`}
          aria-pressed={visible}
        >
          {visible ? 'Hide' : 'Show'}
        </button>
      </div>
      {error && <p id={errorId} className="field-error" role="alert">{error.message}</p>}
    </div>
  );
}

export default PasswordField;
