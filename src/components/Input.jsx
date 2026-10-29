import React, { useId } from 'react';
import { FormField } from './FormField.jsx';

export function Input({label,error,hint,leftIcon,required,...props}) {
  const generatedId = useId();
  const id = props.id || generatedId;
  const input = <input id={id} className="control" required={required} aria-invalid={error ? true : undefined} aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined} {...props}/>;
  return <FormField label={label} error={error} hint={hint} required={required} id={id}>
    {leftIcon ? <div className="input-wrap">{input}<span className="input-icon" aria-hidden="true">{leftIcon}</span></div> : input}
  </FormField>;
}
