import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { EmptyState } from '../components/EmptyState.jsx';
import SitePage from './SitePage.jsx';

function NotFound(){return <SitePage eyebrow="404 — OFF THE MAP" title={<>Looks like this<br/><span>page wandered off.</span></>} copy="The link may be old, or the page may have moved. Let's get you back on track."><EmptyState title="Nothing at this address" description="This route doesn't exist in the demo." action={<Link className="btn btn-primary" to="/">Back to home <ArrowRight size={16}/></Link>}/></SitePage>}

export default NotFound;
