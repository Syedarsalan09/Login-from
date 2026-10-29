import React from 'react';

export function Skeleton({width='100%',height=14,round=false}) {return <div className={`skeleton ${round?'skeleton-round':''}`} style={{width,height}}/>}
