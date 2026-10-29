import React from 'react';

export function PriceTag({children,discount=false}) {return <span className={`price-tag ${discount?'discount':''}`}>{children}</span>}
