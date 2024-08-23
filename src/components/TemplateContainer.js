// import React, { useState } from 'react';
// import Template1 from './Template1.js';
// import Template2 from './Template2.js';
// import Template3 from './Template3.js';
// import './style.scss';

// function TemplateContainer() {
//     const [template, setTemplate] = useState('');

//     const handleButtonClick = (template) => {
//         setTemplate(template);
//     };

//     const renderTemplate = () => {
//         switch (template) {
//             case 'Template1':
//                 return <Template1 />;
//             case 'Template2':
//                 return <Template2 />;
//             case 'Template3':
//                 return <Template3 />;
//             default:
//                 return <div>Select a template</div>;
//         }
//     };

//     return (
//         <div id="template-container">
//             <div class="main-description">
//                 <h1>Nowoczesne strony ślubne</h1>
//                 <h2>Eleganckie, nietuzinkowe zaproszenia, czy może piękna pamiątka?</h2>
//             </div>
//             <div class="buttons">
//                 <button class="buttons__element">
//                     <img src="../assets/img/third-page/page3.jpg.jpg"
//                         alt="" /><span class="label" data-template="Template1" onClick={(e) => handleButtonClick(e.target.getAttribute('data-template'))}>Szablon 1</span>
//                 </button>
//                 <button class="buttons__element">
//                     <img src="../assets/img/third-page/page3.jpg"
//                         alt="" /><span class="label" data-template="Template2" onClick={(e) => handleButtonClick(e.target.getAttribute('data-template'))}>Szablon 2</span>
//                 </button>
//                 <button class="buttons__element">
//                     <img src="../assets/img/third-page/page3.jpg"
//                         alt="" /><span class="label" data-template="Template3" onClick={(e) => handleButtonClick(e.target.getAttribute('data-template'))}>Szablon 3</span></button>
//             </div>
//         </div>
//     )
// }

// export default TemplateContainer;