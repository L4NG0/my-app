import React from 'react';
import Arrow from './arrow.js'; // Załóżmy, że masz komponenty Arrow i Left
import Left from './left.js';
import Template1 from './Template1.js'; // Załóżmy, że masz komponenty szablonów
import Template2 from './Template2.js';
import Template3 from './Template3.js';
import styles from './mainContent.module.scss'; // Załóżmy, że używasz CSS modules

const MainContent = ({ template, handleButtonClick }) => {

    const arrowSwitch = () => {
        switch (template) {
            case 'Template1':
                return <Arrow onClick={() => handleNextTemplate('Template2')} />;
            case 'Template2':
                return (
                    <div>
                        <Arrow onClick={() => handleNextTemplate('Template3')} />
                        <Left onClick={() => handlePrevTemplate('Template1')} />
                    </div>
                );
            case 'Template3':
                return <Left onClick={() => handlePrevTemplate('Template2')} />;
            default:
                return null;
        }
    }

    const handleNextTemplate = (nextTemplate) => {
        handleButtonClick(nextTemplate);
    };

    const handlePrevTemplate = (prevTemplate) => {
        handleButtonClick(prevTemplate);
    };

    const renderTemplate = () => {
        switch (template) {
            case 'Template1':
                return <Template1 />;
            case 'Template2':
                return <Template2 />;
            case 'Template3':
                return <Template3 />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.template_container} id="template-container">
            {renderTemplate()}
            {arrowSwitch()}

            <div className={styles.main_description}>
                <h1>Nowoczesne strony ślubne</h1>
                <h2>Eleganckie, nietuzinkowe zaproszenia, czy może piękna pamiątka?</h2>
            </div>

            <div className={styles.buttons}>
                <button className={styles.buttons__element} onClick={() => handleButtonClick('Template1')}>
                    <img src={require("../assets/img/third-page/page3.jpg")} alt="" />
                    <span className={styles.label}>Szablon 1</span>
                </button>
                <button className={styles.buttons__element} onClick={() => handleButtonClick('Template2')}>
                    <img src={require("../assets/img/third-page/page3.jpg")} alt="" />
                    <span className={styles.label}>Szablon 2</span>
                </button>
                <button className={styles.buttons__element} onClick={() => handleButtonClick('Template3')}>
                    <img src={require("../assets/img/third-page/page3.jpg")} alt="" />
                    <span className={styles.label}>Szablon 3</span>
                </button>
            </div>
        </div>
    );
}

export default MainContent;
