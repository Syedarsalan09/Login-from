import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SitePage from './SitePage.jsx';

function About(){return <SitePage eyebrow="A LITTLE ABOUT US" title={<>Less noise.<br/><span>More meaningful work.</span></>} copy="Northstar is built around a simple idea: your tools should help you think clearly, work intentionally, and make space for what matters."><div className="feature-grid"><article><div className="feature-number">01</div><h3>Clarity by design</h3><p>Thoughtful details, focused workflows, and a calmer digital workspace.</p></article><article><div className="feature-number">02</div><h3>People come first</h3><p>Technology should adapt to people — not the other way around.</p></article><article><div className="feature-number">03</div><h3>Built with care</h3><p>Every interaction is an opportunity to make the everyday feel easier.</p></article></div><Link className="btn btn-primary" to="/register">Find your focus <ArrowRight size={16}/></Link></SitePage>}

export default About;
