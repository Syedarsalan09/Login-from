import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function Modal({open,onClose,title,children}) {return <AnimatePresence>{open&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={onClose}><motion.div className="modal" initial={{y:18,scale:.97}} animate={{y:0,scale:1}} exit={{y:10,scale:.98}} onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={onClose}><X size={18}/></button><h3>{title}</h3>{children}</motion.div></motion.div>}</AnimatePresence>}
