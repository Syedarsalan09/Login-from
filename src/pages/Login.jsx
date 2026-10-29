import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, LockKeyhole, CheckCircle2, Sparkles } from 'lucide-react';
import { AuthShell } from '../components/AuthShell.jsx';
import { Button } from '../components/Button.jsx';
import { Input } from '../components/Input.jsx';
import { PasswordInput } from '../components/PasswordInput.jsx';
import { Checkbox } from '../components/Checkbox.jsx';

function FormNotice({children}) {return children?<motion.div initial={{opacity:0,y:-5}} animate={{opacity:1,y:0}} className="form-notice"><CheckCircle2 size={16}/>{children}</motion.div>:null}

function Login(){const [loading,setLoading]=useState(false),[notice,setNotice]=useState('');const nav=useNavigate();function submit(e){e.preventDefault();setLoading(true);setNotice('');setTimeout(()=>{setLoading(false);setNotice('Demo sign-in complete — connect your API to enable real authentication.');},950)}return <AuthShell><div className="panel-heading"><div className="mini-icon"><Sparkles size={19}/></div><div className="welcome-kicker">WELCOME BACK</div><h2>Sign in to your space</h2><p>Enter your details to continue where you left off.</p></div><div className="social-row"><button className="social-button" onClick={()=>setNotice('Connect Google OAuth to enable this option.')}><span className="google-g">G</span> Continue with Google</button><button className="social-button apple-button" onClick={()=>setNotice('Connect Apple OAuth to enable this option.')}><span>●</span></button></div><div className="separator"><span/>or sign in with email<span/></div><form onSubmit={submit} className="auth-form"><Input label="Email address" type="email" placeholder="you@company.com" autoComplete="email" required leftIcon={<Mail size={17}/>}/><div className="password-label"><span>Password</span><Link to="/forgot-password">Forgot password?</Link></div><PasswordInput label="" placeholder="Enter your password" autoComplete="current-password" required minLength={6}/><div className="form-options"><Checkbox defaultChecked>Remember me</Checkbox><span className="secure-note"><LockKeyhole size={13}/> Encrypted</span></div><Button type="submit" loading={loading} className="submit-button">Sign in <ArrowRight size={17}/></Button><FormNotice>{notice}</FormNotice></form><p className="switch-auth">New to Northstar? <Link to="/register">Create an account <ArrowRight size={14}/></Link></p><div className="terms-note">By continuing, you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</div></AuthShell>}

export default Login;
