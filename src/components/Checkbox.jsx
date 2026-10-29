import React from 'react';

export function Checkbox({children,...props}) {return <label className="checkbox-row"><input type="checkbox" {...props}/><span className="checkmark"/><span>{children}</span></label>}
