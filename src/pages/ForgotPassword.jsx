import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, CheckCircle2, Send } from 'lucide-react';
import { AuthShell } from '../components/AuthShell.jsx';
import { Button } from '../components/Button.jsx';
import { Input } from '../components/Input.jsx';

function ForgotPassword(){const [sent,setSent]=useState(false),[loading,setLoading]=useState(false);function submit(e){e.preventDefault();setLoading(true);setTimeout(()=>{setLoading(false);setSent(true)},850)}return <AuthShell mode="forgot"><div className="panel-heading"><div className="mini-icon"><Mail size={19}/></div><div className="welcome-kicker">ACCOUNT RECOVERY</div><h2>{sent?'Check your inbox':'Forgot your password?'}</h2><p>{sent?'If an account exists for that email, recovery instructions are on the way.':'It happens. Enter your email and we’ll send you a link to reset your password.'}</p></div>{sent?<div className="success-panel"><div className="success-mark"><CheckCircle2 size={25}/></div><p>Be sure to check your spam folder too.</p><Button className="submit-button" onClick={()=>setSent(false)}>Try another email</Button></div>:<form className="auth-form" onSubmit={submit}><Input label="Email address" type="email" placeholder="you@company.com" required autoComplete="email" leftIcon={<Mail size={17}/>}/><Button type="submit" loading={loading} className="submit-button">Send reset link <Send size={16}/></Button></form>}<p className="switch-auth back-link"><Link to="/login"><ArrowLeft size={14}/> Back to sign in</Link></p></AuthShell>}

export default ForgotPassword;
