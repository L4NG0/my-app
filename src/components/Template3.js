import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from "leaflet";
import styles from './template3.module.scss';
import './viewport.scss';
// import '../js/timer.js';

function Template3() {

    const [content, setContent] = useState('');

    const contentMap = {
        description: '<p>Drodzy Bliscy, Krewni i Internetowi Towarzysze, Z ekscytacją i nutą niedowierzania ogłaszamy, że postanowiliśmy wreszcie zrobić coś niesamowicie odważnego – pobrać się! Tak, to prawda, zespół „My i Nasze Szalone Pomysły” wraca z nową produkcją. Kto jest zaproszony? Każdy, kto kiedykolwiek przetrwał nasze historie na Instagramie, odpowiedział na nasze wiadomości z gifami, lub po prostu jest gotów świętować z nami, niezależnie od tego, jak dawno nas widział! (Tak, Ty też, sąsiedzie, który zawsze podbiera nasz Wi-Fi 😄) Kiedy? W dniu, który jeszcze nie zdarzył się w kalendarzu Majów (czyli po prostu w sobotę, 31 sierpnia 2024 roku o 16:00). Gdzie? W magicznym ogrodzie przy zamku, którego jeszcze nie widzieliście – w końcu kto by pomyślał, że coś takiego istnieje w naszym mieście? Jeśli nie zdążycie znaleźć tego miejsca na mapie, wszystkie szczegóły znajdziecie w kolejnych kafelkach, dobrej zabawy!</p>',
        church: '<h3>Wiemy jak ciężko tu trafić więc przygotowaliśmy specjalną mapkę <i className={styles["fa-solid fa-face-laugh-wink"></i></h3> <div className={styles["castle"><img src={require("../assets/img/third-page/1.png")} alt=""></div>',
        place: '<h3>Tu już z górki, na pewno traficie</h3> <div className={styles["castle"><img src={require("../assets/img/third-page/2.png")} alt=""></div>',
        map: '<div id="map"></div>',
        contact: '<div className={styles["third-contact"><div className={styles["third-contact__half"><img src={require("../assets/img/third-page/pexels-comoyuli-26242019.jpg")} alt="Profile photo"><h3>Matylda</h3><p><a href="tel:+4870044485">+4870044485</a></p><div className={styles["third-contact__social"><ul><li><a target="_blank" href="https://www.facebook.com/people/WGCraftDesign/61560779991721/"><i className={styles["fa-brands fa-facebook-f"></i></a></li><li><a href="#"><i className={styles["fa-brands fa-linkedin-in"></i></a></li><li><a href="#"><i className={styles["fa-brands fa-instagram"></i></a></li><li><a href="#"><i className={styles["fa-regular fa-paper-plane"></i></a></li></ul></div></div><div className={styles["third-contact__half"><img src={require("../img/third-page/pexels-mizunokozuki-12898970.jpg")} alt="Profile photo"><h3>Dawid</h3><p><a href="tel:+48500600700">+48500600700</a></p><div className={styles["third-contact__social"><ul><li><a target="_blank" href="https://www.facebook.com/people/WGCraftDesign/61560779991721/"><i className={styles["fa-brands fa-facebook-f"></i></a></li><li><a href="#"><i className={styles["fa-brands fa-linkedin-in"></i></a></li><li><a href="#"><i className={styles["fa-brands fa-instagram"></i></a></li><li><a href="#"><i className={styles["fa-regular fa-paper-plane"></i></a></li></ul></div></div></div>'
    };

    const handleMouseEnter = (key) => {
        setContent(contentMap[key]);
        if (key === 'map') {
            loadMap();
        }
    };

    const handleClick = (key) => {
        setContent(contentMap[key]);
    };
    // useEffect(() => {
    //     timer()
    // }, []);

    return (
        <div className="viewport">
            <div className={styles["third-main"]}>
                <div className={styles["holder"]}>
                    <div className={styles["time"]}>
                    </div>
                </div>
            </div >
            <div className={styles["main-container"]}>
                <div className={styles["grid-container"]}>
                    <div className={styles["card card--2x"]}>
                        <div className={styles["card__content big-script padding-large"]}>
                            <p>Nasza krótka historia</p>
                        </div>
                    </div>
                    <div className={styles["card"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-asadphoto-1024975.jpg")}
                                alt="Image 1" />
                        </div>
                    </div>
                    <div className={styles["card"]}>
                        <div className={styles["card__content"]}>
                            <p><em>Nie czekaj. Pora nigdy nie będzie idealna..</em>
                            </p>
                            <p>— Napoleon Hill</p>
                        </div>
                    </div>
                    <div className={styles["card"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-fotios-photos-1655329.jpg")} alt="Image 2" />
                        </div>
                    </div>

                    <div className={styles["card card--horizontal"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-emma-bauso-1183828-3585806.jpg")} alt="Image 3" />
                        </div>
                    </div>
                    <div className={styles["card card--featured"]}>
                        <div className={styles["card__side-by-side--m"]}>
                            <div className={styles["card__image"]}>
                                <img src={require("../assets/img/third-page/pexels-gabriel-bastelli-865174-1759823.jpg")} alt="Image 4" />
                            </div>
                            <div className={styles["card__content padding-large--l"]}>
                                <h2>Oni po raz trzeci!</h2>
                                <p>Ona, entuzjastka kreatywności i unikalnego stylu – od kolorowych sukienek po promienny
                                    uśmiech, który zawsze rozjaśnia jej twarz. On, pasjonat literatury i długich, spokojnych
                                    wieczorów przy dobrej książce, zawsze otwarty na nowe doświadczenia, zwłaszcza gdy ona jest
                                    obok. Razem tworzą duet pełen energii i równowagi, bardziej intrygujący niż najlepszy
                                    thriller, słodszy niż karmelowe lody i bardziej fascynujący niż tajemnicze głębiny oceanu.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["card card--vertical"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-ilkinsafterov-1463563.jpg")} alt="Image 5" />
                        </div>
                    </div>
                    <div className={styles["card"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-katrina-justovica-3393577-7958188.jpg")} alt="Image 6" />
                        </div>
                    </div>
                    <div className={styles["card card--horizontal"]}>
                        <div className={styles["card__side-by-side"]}>
                            <div className={styles["card__image"]}>
                                <img src={require("../assets/img/third-page/pexels-alexandro-david-871783-1912359.jpg")} alt="Image 7" />
                            </div>
                            <div className={styles["card__content"]}>
                                <h4>Wspólne motto</h4>
                                <p>Rodzina nie jest tylko czymś ważnym. Ona jest wszystkim.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["card card--vertical"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-orione-conceicao-1531154-2983448.jpg")} alt="Image 8" />
                        </div>
                    </div>
                    <div className={styles["card"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-pixabay-219616.jpg")} alt="Image 9" />
                        </div>
                    </div>
                    <div className={styles["card"]}>
                        <div className={styles["card__content"]}>
                            <p><em>Jestem bardzo szczęśliwy, bo mam kogoś, kto sprawia, że ciężko powiedzieć „do widzenia”.</em>
                            </p>
                            <p>— Kubuś Puchatek</p>
                        </div>
                    </div>
                    <div className={styles["card card--2x"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-pixabay-247908.jpg")} alt="Image 10" />
                        </div>
                    </div>
                    <div className={styles["card card--horizontal card--frameless"]}>
                        <div className={styles["card__content big-script"]}>
                            <p>Nowy rozdział</p>
                        </div>
                    </div>
                    <div className={styles["card"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-pixabay-258421.jpg")} alt="Image 11" />
                        </div>
                    </div>
                    <div className={styles["card card--horizontal"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-s-minh-151628940-10654335.jpg")} alt="Image 12" />
                        </div>
                    </div>
                    <div className={styles["card"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-wildlittlethingsphoto-2055225.jpg")} alt="Image 13" />
                        </div>
                    </div>
                    <div className={styles["card"]}>
                        <div className={styles["card__content"]}>
                            <p><em>Wszystko, co w życiu zrozumiałem, zrozumiałem tylko dlatego, że kocham.</em></p>
                            <p>— Lew Tołstoj</p>
                        </div>
                    </div>
                    <div className={styles["card"]}>
                        <div className={styles["card__image"]}>
                            <img src={require("../assets/img/third-page/pexels-zvolskiy-1676124.jpg")} alt="Image 14" />
                        </div>
                    </div>
                </div>
            </div >
            <div className={styles["third-contact"]}>
                <div className={styles["special-container"]}>
                    <div className={styles["special-buttons"]}>
                        <div className={styles["special-buttons__item"]} onMouseEnter={() => handleMouseEnter('description')} onClick={() => handleClick('description')}>
                            <p>Szczegóły</p>
                        </div>
                        <div className={styles["special-buttons__item"]} onMouseEnter={() => handleMouseEnter('church')} onClick={() => handleClick('church')}>
                            <p>Ślub</p>
                        </div>
                        <div className={styles["special-buttons__item"]} onMouseEnter={() => handleMouseEnter('place')} onClick={() => handleClick('place')}>
                            <p>Wesele</p>
                        </div>
                        <div className={styles["special-buttons__item"]} onMouseEnter={() => handleMouseEnter('map')} onClick={() => handleClick('map')}>
                            <p>Dojazd</p>
                        </div>
                        <div className={styles["special-buttons__item"]} onMouseEnter={() => handleMouseEnter('contact')} onClick={() => handleClick('contact')}>
                            <p>Kontakt</p>
                        </div>
                    </div>
                    <div className={styles["special-content"]} dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        </div >

    )
}

export default Template3;

const loadMap = () => {
    const loadScript = (url, callback) => {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.onload = callback;
        document.head.appendChild(script);
    };

    loadScript('https://unpkg.com/leaflet/dist/leaflet.js', () => {
        const map = L.map('map').setView([54.35095, 18.65639], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([54.35206, 18.65906]).addTo(map)
            .bindPopup('Hotel Królewski, Gdańsk, Polska');
        L.marker([54.34980, 18.65301]).addTo(map)
            .bindPopup('Bazylika Mariacka, Gdańsk, Polska')
            .openPopup();
    });
};