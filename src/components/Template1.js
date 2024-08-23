import React, { useEffect } from 'react';
import './template1.css';
import './viewport.scss';
import setupSmoothScroll from './setupSmoothScroll.js';

function Template1() {

    useEffect(() => {
        const naviHeight = 10 * window.innerHeight / 100;
        setupSmoothScroll(naviHeight);
    }, []);
    return (
        <div class="viewport">
            <div class="main-fixed" data-target="#navbar-main" id="navbar-main">
                <div class="navbar navbar-inverse navbar-fixed-top">
                    <div class="container">
                        <div class="navbar-header">
                            <div class="pull-left logo"><img src={require("../assets/img/logo.png")} /></div><button
                                type="button" class="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span>
                                <span class="icon-bar"></span></button>
                        </div>
                        <div class="navbar-collapse collapse">
                            <ul class="nav navbar-nav pull-right">
                                <li><a href="#home-section">Witamy</a></li>
                                <li><a href="#ceremony" >Wydarzenie</a></li>
                                <li><a href="#about" >O nas</a></li>
                                <li><a href="#portfolio" >Galeria</a></li>
                                <li><a href="#details" >Szczegóły</a></li>
                                <li><a href="#contact" >Lokalizacje</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home-section">
                <div id="headerwrap" name="home">
                    <header class="clearfix tb"></header>
                </div>
                <div class="container" id='ceremony'>
                    <div class="row">
                        <div class="col-lg-12 tb-cell text-center">
                            <h1>Maciej i Lila</h1>
                            <p>Pobieramy się! 14.06.2025</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <h2 class="centered">Nasz Ślub</h2>
                <hr />
                <h3>👰‍♀️🤵‍♂️</h3>
                <div class="col-lg-8 col-lg-offset-2">
                    <p class="large">Drodzy Przyjaciele, Rodzina i Znajomi z Internetu, Z wielką radością i lekkim
                        przerażeniem informujemy, że postanowiliśmy zrobić coś szalonego – powiedzieć sobie "tak" w
                        obecności naszych najbliższych i... no cóż, wszystkich, którzy mają ochotę na darmowe
                        jedzenie.
                    </p>
                </div>
                <div class="col-lg-4 callout">
                    <h3>👨‍👩‍👧‍👦</h3>
                    <h3>Kto będzie?</h3>
                    <p>Wszyscy, którzy kiedykolwiek polubili nasze zdjęcie na Facebooku, retweetnęli nasz żart na
                        Twitterze, lub po prostu znają nas osobiście i chcą świętować ten dzień razem z nami! (Tak,
                        to
                        oznacza Ciebie, kuzynie drugiego stopnia, którego widzieliśmy tylko na facebooku 😄)</p>
                </div>
                <div class="col-lg-4 callout">
                    <h3>📅</h3>
                    <h3>Kiedy?</h3>
                    <p>W dniu, kiedy wszystkie planety ułożą się w linii (albo po prostu w sobotę, 14 czerwca 2025
                        roku
                        16:00).</p>
                </div>
                <div class="col-lg-4 callout">
                    <h3>📍</h3>
                    <h3>Gdzie ?</h3>
                    <p>Na pokładzie międzygalaktycznego statku kosmicznego "Amor", który właśnie przelatuje obok
                        Saturna. Dla tych, którzy nie zdążyli na ostatnią rakietę znajdą wszystkie informacje
                        poniżej
                    </p>
                </div>
            </div>
            <div class="div-pattern"></div>
            <div id="about" name="about">
                <div class="container">
                    <div class="row white">
                        <h2 class="centered">Cali My</h2>
                        <hr />
                        <div class="col-md-5"><img class="img-responsive" src={require("../assets/img/about/about1.jpg")} /></div>
                        <div class="col-md-7">
                            <p>Ona, miłośniczka wszystkiego co błyszczące – od
                                cekinów na sukience po blask w jego oczach. On, entuzjasta spokojnych wieczorów z książką w
                                ręku, który jednak nie odmówi dobrej przygody, zwłaszcza jeśli to ona prowadzi. Razem tworzą
                                duet dynamiczniejszy niż Batman i Robin, słodszy niż ciasto z bitą śmietaną i bardziej
                                nieprzewidywalny niż pogoda w kwietniu.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="portfolio" name="portfolio">
                <div class="container">
                    <div class="row">
                        <h2 class="centered">GALERIA</h2>
                        <hr />
                        <div class="col-lg-8 col-lg-offset-2 centered">
                            <p class="large">Ich wspólna historia to mieszanka romantycznych komedii, dramatów i filmów
                                akcji –
                                zawsze z happy endem. Są jak dwa różne składniki, które razem tworzą idealny przepis na
                                miłość:
                                trochę szaleństwa, szczypta humoru i garść wzajemnego wsparcia.</p>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="grid overlay">
                                    <figure><img class="img-responsive" src={require("../assets/img/portfolio/folio01.jpg")} alt="" />
                                        <figcaption>
                                            <h5>Pierwsza randka</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="grid overlay">
                                    <figure><img class="img-responsive" src={require("../assets/img/portfolio/folio02.jpg")} alt="" />
                                        <figcaption>
                                            <h5>Druga randka</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="grid overlay">
                                    <figure><img class="img-responsive" src={require("../assets/img/portfolio/folio03.jpg")} alt="" />
                                        <figcaption>
                                            <h5>Taka niespodzianka</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="grid overlay">
                                    <figure><img class="img-responsive" src={require("../assets/img/portfolio/folio04.jpg")} alt="" />
                                        <figcaption>
                                            <h5>Powiedziałam Tak!</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="grid overlay">
                                    <figure><img class="img-responsive" src={require("../assets/img/portfolio/folio05.jpg")} alt="" />
                                        <figcaption>
                                            <h5>Trzeba było powiększyć rodzinę</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="grid overlay">
                                    <figure><img class="img-responsive" src={require("../assets/img/portfolio/folio06.jpg")} alt="" />
                                        <figcaption>
                                            <h5>Ciąg dalszy nastąpi..</h5>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="details">
                <div class="container">
                    <div class="row centered">
                        <h2 class="centered">SZCZEGÓŁY</h2>
                        <hr />
                        <div class="col-lg-8 col-lg-offset-2 centered">
                            <p>W dniu ślubu zamierzają przysiąc sobie miłość, wierność i wspólne oglądanie ulubionych
                                seriali –
                                nawet te, które już widzieli po kilka razy. Obiecują też, że będą razem świętować każdego
                                złapanego pokemona w Pokemon GO, aż złapią je wszystkie!.</p><br />
                        </div>
                        <div class="col-lg-8 col-lg-offset-2 centered">
                            <p>Jeśli zastanawiasz się nad idealnym prezentem dla nas, niech Twoja wyobraźnia pójdzie na
                                całość –
                                ale nie za daleko. Zamiast kolejnego tostera czy miksera (których mamy już pięć),
                                wolelibyśmy
                                zobaczyć jak Twoja hojność przelewa się przez kopertę. Tak, dobrze myślisz – banknoty zawsze
                                pasują do naszego wystroju wnętrz. A jeśli chodzi o kwiaty, to zamiast alergicznych reakcji
                                na
                                pyłki, wolelibyśmy emocje związane z drapaniem. Zdrapki to nasz wybór! Kto wie, może to Ty
                                będziesz świadkiem, jak wygrywamy fortunę!</p>
                        </div>
                        <h4>Więc pamiętaj:</h4>
                        <p>💵 Zamiast wazonu – koperta.<br />🎟️ Zamiast bukietu – zdrapka.</p>
                        <div class="col-lg-8 col-lg-offset-2 centered">
                            <p>Prosimy o potwierdzenie obecności do 1 czerwca, abyśmy mogli upewnić się, że zamówimy
                                wystarczającą ilość tortu (i pizzy dla wybrednych).<br />Z miłością i nadzieją na
                                prezenty,<br />Maciej i Lila</p>
                        </div>
                    </div>
                </div></div>
            <div id="contact" name="contact">
                <div class="container">
                    <div class="row">
                        <h2 class="centered">Ważne miejsca</h2>
                        <hr />
                    </div>
                </div>
                <div class="col-md-5"><i class="fa fa-map-marker fa-2x"></i> <strong>Kościół pw.<br />Świętego Jana
                    Chrzciciela</strong>
                    <p>Kościelna 12<br />80-330, Gdańsk</p>
                </div>
                <div><i class="fa fa-map-marker fa-2x"></i> <strong>Sala Bankietowa u Stasia</strong>
                    <p>ul. Galaktyczna 42,<br />80-522, Gdańsk</p>
                </div>
            </div>
            <div id="footerwrap">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="col-md-6"><i class="fa fa-envelope-o fa-2x"></i>
                                <p>wgcraftdesign@gmail.com</p>
                            </div>
                            <div class="col-md-6"><i class="fa fa-phone fa-2x"></i>
                                <p>+48 511391780</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <ul class="list-inline social-buttons">
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Template1;