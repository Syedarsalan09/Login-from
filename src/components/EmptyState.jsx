import React from 'react';

export function EmptyState({title='Nothing here yet',description='Try adjusting your search or check back later.',action}) {return <div className="state-card"><div className="state-icon">✦</div><h3>{title}</h3><p>{description}</p>{action}</div>}
