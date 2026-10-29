import React from 'react';
import { FormField } from './FormField.jsx';

export function Select({label,options=[],error,hint,...props}) {
  return <FormField label={label} error={error} hint={hint} required={props.required}>
    <select className="control" defaultValue="" {...props}>
      <option value="" disabled>Select an option</option>
      {options.map(option=><option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
  </FormField>;
}
