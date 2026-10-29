import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Send, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button.jsx';
import { Input } from '../components/Input.jsx';
import { FormField } from '../components/FormField.jsx';
import SitePage from './SitePage.jsx';

function Contact(){const [sent,setSent]=useState(false);return <SitePage eyebrow="WE'RE HERE TO HELP" title={<>A real person.<br/><span>A thoughtful answer.</span></>} copy="Have a question, an idea, or something that could be better? Send us a note.">{sent?<div className="success-panel"><CheckCircle2 size={26}/><h3>Message ready</h3><p>This front-end demo does not send messages yet. Connect your contact API to finish setup.</p></div>:<form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><Input label="Your name" placeholder="Alex Morgan" required/><Input label="Email address" type="email" placeholder="you@company.com" required/><FormField label="What can we help with?"><select className="control" required defaultValue=""><option value="" disabled>Choose a topic</option><option>General question</option><option>Account support</option><option>Partnership</option><option>Something else</option></select></FormField><FormField label="Your message"><textarea className="control textarea" rows="4" placeholder="Tell us a little about it..." required/></FormField><Button type="submit">Send message <Send size={16}/></Button></form>}</SitePage>}

export default Contact;
