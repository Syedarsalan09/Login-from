import React from 'react';
import { Link } from 'react-router-dom';

export function Brand({light=false}) {return <Link to="/" className={`brand ${light?'brand-light':''}`} aria-label="Northstar home"><span className="brand-mark"><span/></span><span>northstar<span className="brand-dot">.</span></span></Link>}
