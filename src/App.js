import React, { useState } from 'react';
import Navigation from './components/Navigation.js';
import MainContent from './components/MainContent.js';
import Template from './components/Template.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

//zakładka szablony, 3 miniaturki szablonów

const App = () => {
  const [template, setTemplate] = useState('');

  const handleButtonClick = (template) => {
    setTemplate(template);
  };
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        {/* <MainContent template={template} handleButtonClick={handleButtonClick} /> */}
        <Template />
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
