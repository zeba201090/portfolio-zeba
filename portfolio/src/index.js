import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';

import Section1 from './section1';
import About from './about';
import ScrollToTopButton from './scroll';
import Skills from './Skills';
import Achievements from './achievements'
import Projects from './projects';
import Footer from './footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    <Section1 />
    <About />
    <Skills />
    <Achievements />
    <Projects />
    <Footer />
    <ScrollToTopButton/>
    
  </React.StrictMode>
);

