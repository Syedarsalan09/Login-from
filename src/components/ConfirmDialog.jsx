import React from 'react';
import { Modal } from './Modal.jsx';
import { Button } from './Button.jsx';

export function ConfirmDialog({open,onClose,onConfirm,title='Are you sure?',message='This action cannot be undone.'}) {return <Modal open={open} onClose={onClose} title={title}><p>{message}</p><div className="dialog-actions"><Button variant="ghost" onClick={onClose}>Cancel</Button><Button onClick={onConfirm}>Confirm</Button></div></Modal>}
