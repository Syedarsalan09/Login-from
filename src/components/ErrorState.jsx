import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from './Button.jsx';

export function ErrorState({title='Something went wrong',description='Please try again in a moment.',onRetry}) {return <div className="state-card"><div className="state-icon error-icon"><AlertCircle/></div><h3>{title}</h3><p>{description}</p>{onRetry&&<Button onClick={onRetry}>Try again</Button>}</div>}
