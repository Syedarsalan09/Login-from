import React from 'react';

export function Rating({value=4.8,count}) {return <span className="rating"><span>★</span> {value.toFixed(1)} {count!=null?<small>({count})</small>:null}</span>}
