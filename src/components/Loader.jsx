import React from 'react';
import { LoaderCircle } from 'lucide-react';

export function Loader({label='Loading...'}) {return <div className="loader"><LoaderCircle className="spin" size={23}/><span>{label}</span></div>}
