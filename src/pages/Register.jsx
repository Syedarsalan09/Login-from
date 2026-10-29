import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, UserRound, CheckCircle2, Sparkles } from 'lucide-react';
import { AuthShell } from '../components/AuthShell.jsx';
import { Button } from '../components/Button.jsx';
import { Input } from '../components/Input.jsx';
import { PasswordInput } from '../components/PasswordInput.jsx';
import { Checkbox } from '../components/Checkbox.jsx';

function FormNotice({children}) {return children?<motion.div initial={{opacity:0,y:-5}} animate={{opacity:1,y:0}} className="form-notice"><CheckCircle2 size={16}/>{children}</motion.div>:null}

function Register(){const [loading,setLoading]=useState(false),[notice,setNotice]=useState('');function submit(e){e.preventDefault();setLoading(true);setTimeout(()=>{setLoading(false);setNotice('Demo account ready — connect your API to create a real account.');},900)}return <AuthShell mode="register"><div className="panel-heading"><div className="mini-icon"><Sparkles size={19}/></div><div className="welcome-kicker">YOUR NEXT CHAPTER</div><h2>Create your account</h2><p>Start with a few details. Your better workflow awaits.</p></div><form onSubmit={submit} className="auth-form register-form"><Input label="Full name" placeholder="Alex Morgan" autoComplete="name" required leftIcon={<UserRound size={17}/>}/><Input label="Work email" type="email" placeholder="you@company.com" autoComplete="email" required leftIcon={<Mail size={17}/>}/><PasswordInput label="Create password" placeholder="At least 8 characters" minLength={8} required autoComplete="new-password"/><Checkbox required>I agree to the <a href="#terms">Terms of Service</a> and Privacy Policy.</Checkbox><Button type="submit" loading={loading} className="submit-button">Create account <ArrowRight size={17}/></Button><FormNotice>{notice}</FormNotice></form><p className="switch-auth">Already have an account? <Link to="/login">Sign in <ArrowRight size={14}/></Link></p></AuthShell>}

export default Register;
