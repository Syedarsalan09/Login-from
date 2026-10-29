import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagination({page=1,totalPages=5,onChange=()=>{}}) {return <div className="pagination"><button disabled={page<=1} onClick={()=>onChange(page-1)}><ChevronLeft size={16}/></button>{Array.from({length:totalPages},(_,i)=>i+1).map(n=><button key={n} className={page===n?'active':''} onClick={()=>onChange(n)}>{n}</button>)}<button disabled={page>=totalPages} onClick={()=>onChange(page+1)}><ChevronRight size={16}/></button></div>}
