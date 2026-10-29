import React, { useId, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FormField } from './FormField.jsx';

export function PasswordInput({label='Password',error,hint,required,...props}) {
  const [show,setShow]=useState(false);
  const id = useId();
  return <FormField label={label} error={error} hint={hint} id={id} required={required}>
    <div className="password-wrap">
      <input id={id} className="control" type={show?'text':'password'} required={required} aria-invalid={error ? true : undefined} aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined} {...props}/>
      <button type="button" className="icon-button" onClick={()=>setShow(!show)} aria-label={show?'Hide password':'Show password'} aria-pressed={show}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button>
    </div>
  </FormField>;
}
