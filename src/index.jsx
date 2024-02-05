// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteApps from './components/NoteApp';
import './styles/styles.css';
import './styles/responsive.css';
import { BrowserRouter } from 'react-router-dom';

 
const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NoteApps/>    
    </BrowserRouter>
);