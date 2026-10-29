import React, { cloneElement, isValidElement, useId } from 'react';

export function FormField({label,error,hint,children,id,required}) {
  const generatedId = useId();
  const fieldId = id || generatedId;
  const descriptionId = error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined;
  const control = isValidElement(children) && children.type !== 'div'
    ? cloneElement(children, {
        id: children.props.id || fieldId,
        'aria-invalid': error ? true : children.props['aria-invalid'],
        'aria-describedby': children.props['aria-describedby'] || descriptionId,
      })
    : children;

  return <div className="field">
    {label ? <div className="field-label-row"><label htmlFor={fieldId}>{label}{required ? <span aria-hidden="true"> *</span> : null}</label>{error ? <span className="field-error" id={`${fieldId}-error`}>{error}</span> : null}</div> : null}
    {control}
    {hint && !error ? <small className="hint" id={`${fieldId}-hint`}>{hint}</small> : null}
  </div>;
}
