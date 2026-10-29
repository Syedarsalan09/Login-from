import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Brand } from '../components/Brand.jsx';

function SitePage({eyebrow,title,copy,children}){return <main className="site-page"><div className="site-nav"><Brand/><div><Link to="/about">About</Link><Link to="/contact">Contact</Link><Link to="/login" className="nav-cta">Sign in <ArrowRight size={14}/></Link></div></div><motion.section className="site-content" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.55,ease:'easeOut'}}><div className="eyebrow"><span className="eyebrow-dot"/>{eyebrow}</div><h1>{title}</h1><p className="site-lead">{copy}</p>{children}</motion.section><footer className="site-footer">© 2025 Northstar Studio <span>Made for a little more clarity.</span></footer></main>}


export default SitePage;