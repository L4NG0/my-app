import React, { useState, useEffect } from 'react';
import SvgImg from '../assets/img/sec-page/logo.svg';
import './template2.scss';
import './viewport.scss';
import setupSmoothScroll from './setupSmoothScroll.js';

function Template2() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImgSrc, setModalImgSrc] = useState('');
    const [caption, setCaption] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    const openModal = (src, alt) => {
        setModalImgSrc(src);
        setCaption(alt);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const sendMessage = () => {
        setMessageSent(true);
    };

    useEffect(() => {
        const naviHeight = 10 * window.innerHeight / 100;
        setupSmoothScroll(naviHeight);
    }, []);

    return (
        <div className="viewport">
            <div className="head-sec">
                <div className="logo-sec">
                    <a href="#"><img src={SvgImg} alt="logo" /></a>
                </div>
                <div className="nav-sec navbar-collapse">
                    <ul>
                        <li><a href="#sec-about">O nas</a></li>
                        <li><a href="#sec-event">Zaproszenie</a></li>
                        <li><a href="#sec-gallery">Galeria</a></li>
                        <li><a href="#sec-contact">Kontakt</a></li>
                    </ul>
                </div>
            </div>
            <div className="main-page">
                <img src={require("../assets/img/sec-page/main.jpg")} alt="main-photo" />
            </div>
            <div id="sec-about">
                <div className="about-logo">
                    <img src={require("../assets/img/sec-page/about.png")} alt="" />
                </div>
                <div className="about-pic"><img src={require("../assets/img/sec-page/about1.png")} alt="" /></div>
                <div className="about-description">
                    <h3>Znowu Oni</h3>
                    <p>Ona, pasjonatka elegancji i wyrafinowanego stylu – od połyskujących diamentów na naszyjniku po subtelny
                        uśmiech, który rozświetla jej twarz. On, miłośnik natury i spokojnych spacerów po lesie, ale zawsze
                        gotowy na nowe wyzwania, zwłaszcza gdy ma jej towarzystwo. Razem tworzą duet pełen harmonii i
                        kontrastów, bardziej inspirujący niż Mona Lisa, słodszy niż czekoladowe fondue i bardziej tajemniczy niż
                        nocne niebo pełne gwiazd.</p>
                </div>
            </div>
            <div id="sec-event">
                <div className="event-components">
                    <div className="event-place">
                        <i className="fa-solid fa-church"></i>
                        <h4>Kościół pw. <br />Świętego Jana
                            Chrzciciela</h4>
                        <p>ul. Kościelna 12<br />80-330, Gdańsk <br />31.08.2024 o godzinie 16:00</p>
                    </div>
                    <div className="event-place">
                        <i className="fa-solid fa-campground"></i>
                        <h4>Sala Bankietowa u Stasia</h4>
                        <p>ul. Galaktyczna 42,<br />80-522, Gdańsk <br />31.08.2024 o godzinie 18:00</p>
                    </div>
                </div>
                <div className="event-img">
                    <img src={require("../assets/img/sec-page/event.png")} alt="" />
                </div>
                <div className="event-logo">
                    <img src={require("../assets/img/sec-page/event-logo.svg")} alt="" />
                </div>
                <div className="event-description">
                    <p>Drodzy Przyjaciele, Rodzino i Znajomi,

                        Z wielką radością i nutką szaleństwa informujemy, że postanowiliśmy wkroczyć na nową ścieżkę życia –
                        bierzemy ślub! To wydarzenie będzie bardziej emocjonujące niż finał ulubionego serialu i słodsze niż
                        najpyszniejsze ciasto.

                        Zapraszamy Was do wspólnego świętowania, pełnego radości, tańców i śmiechu. Dołączcie do nas, aby
                        uczcić
                        naszą miłość w dniu pełnym niezapomnianych chwil. Ubierzcie się elegancko, przybądźcie z uśmiechem i
                        przygotujcie się na wyjątkowe przeżycia!

                        Z niecierpliwością czekamy na Was!</p>
                </div>
            </div>
            <div id="sec-gallery">
                <div className="slogan-gallery">
                    <h2>Galeria</h2>
                </div>
                <div className="sec-gallery">
                    <div className="gallery-item">
                        <img src={require("../assets/img/pexels-edwardeyer-4394970.jpg")} alt="Pierwsza randka" onClick={() => openModal('../img/pexels-edwardeyer-4394970.jpg', 'Pierwsza randka')} />
                    </div>
                    <div className="gallery-item">
                        <img src={require("../assets/img/pexels-natalie-bond-320378-1445903.jpg")} alt="Oświadczyny" onClick={() => openModal('../img/pexels-natalie-bond-320378-1445903.jpg', 'Oświadczyny')} />
                    </div>
                    <div className="gallery-item">
                        <img src={require("../assets/img/pexels-pixabay-219616.jpg")} alt="Radość z każdego dnia" onClick={() => openModal('../img/pexels-pixabay-219616.jpg', 'Radość z każdego dnia')} />
                    </div>
                    <div className="gallery-item">
                        <img src={require("../assets/img/pexels-solliefoto-313707.jpg")} alt="Wymarzony dzień wkrótce.." onClick={() => openModal('../img/pexels-solliefoto-313707.jpg', 'Wymarzony dzień wkrótce..')} />
                    </div>
                </div>

                {modalOpen && (
                    <div id="modal" className="modal" onClick={closeModal}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img className="modal-content" id="modal-img" src={modalImgSrc} alt="Modal" />
                        <div id="caption">{caption}</div>
                    </div>
                )}
            </div>
            <div id="sec-contact">
                <div className="contact-form">
                    <div id="add-sent" className={`wrapper centered ${messageSent ? 'sent' : ''}`}>
                        <article className="letter">
                            <div className="side">
                                <h1>Skontaktuj sie z nami</h1>
                                <br />
                                <p>
                                    <textarea type="text" id="text" placeholder="Napisz do nas!"></textarea>
                                </p>
                            </div>
                            <div className="side">
                                <p>
                                    <input type="text" id="username" name="username" autoComplete="username"
                                        placeholder="Twoje imię" />
                                </p>
                                <p>
                                    <input type="email" id="email" name="email" autoComplete="email" placeholder="Twój email" />
                                </p>
                                <p>
                                    <button type="submit" id="sendLetter" onClick={sendMessage}>Wyślij</button>
                                </p>
                            </div>
                        </article>
                        <div className="envelope front"></div>
                        <div className="envelope back"></div>
                    </div>
                    <p className="result-message centered">Dziękujemy za Twoją wiadomość</p>
                </div>
            </div>
            <footer className="sec-foot">
                <h3>WGCraftDesign</h3>
            </footer>
        </div>
    );
}

export default Template2;
