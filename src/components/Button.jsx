import React from 'react';
import { LoaderCircle } from 'lucide-react';

export function Button({children, variant='primary', loading=false, className='', type='button', ...props}) { return <button type={type} className={`btn btn-${variant} ${className}`} disabled={loading||props.disabled} {...props}>{loading?<LoaderCircle className="spin" size={17}/>:null}{children}</button> }
