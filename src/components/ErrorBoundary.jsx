import React from 'react';
import { ErrorState } from './ErrorState.jsx';
export class ErrorBoundary extends React.Component {constructor(p){super(p);this.state={error:false}}static getDerivedStateFromError(){return {error:true}}render(){if(this.state.error)return <main className="error-page"><ErrorState title="This page hit a snag" description="Refresh the page to try again." onRetry={()=>location.reload()}/></main>;return this.props.children}}
