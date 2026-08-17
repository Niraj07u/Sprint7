import React, { useId } from 'react';
import { useFormContext } from 'react-hook-form';

function FieldIcon({ name }) {
  const icons = {
    fullName: <path d="M12 12a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Zm0 2.1c-4.4 0-7.9 2.4-7.9 5.4v.9h15.8v-.9c0-3-3.5-5.4-7.9-5.4Z" />,
    email: <><rect x="3.5" y="5.7" width="17" height="12.8" rx="2" /><path d="m4.6 7 7.4 5.2L19.4 7" /></>,
    phone: <path d="m8 4.2-2.4 1.7c-1 .7-1.2 2-.6 3.5 1.6 4.4 4.9 7.7 9.3 9.3 1.5.6 2.8.4 3.5-.6L19.5 16 16 13.7l-1.5 1.6a10.2 10.2 0 0 1-5.8-5.8L10.3 8 8 4.2Z" />,
    username: <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.8-3.1 3.1-4.9 7-4.9 3.9 0 6.2 1.8 7 4.9" /></>,
  };

  if (!icons[name]) return null;

  return (
    <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

function FormField({ name, label, type = 'text', placeholder, autoComplete, inputMode }) {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <div className={`field-group field-${name}`}>
      <label htmlFor={inputId}>{label}</label>
      <div className={error ? 'input-shell is-invalid' : 'input-shell'}>
        <FieldIcon name={name} />
        <input
          id={inputId}
          className="field-input"
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...register(name)}
        />
      </div>
      {error && <p id={errorId} className="field-error" role="alert">{error.message}</p>}
    </div>
  );
}

export default FormField;
