function loadTemplate(template) {
    fetch(template)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('template-container').innerHTML = data;
            arrowSmooth(template);
            setupSmoothScroll();
            if (template == 'templates/template2.html') {
                modal();
                send();
            } else if (template == 'templates/template3.html') {
                timer();
                specialButton();
            }
            else { }
        })
        .catch(error => console.error('Błąd wczytywania szablonu:', error));
}

// Dodanie nasłuchiwania na kliknięcia przycisków nawigacyjnych
document.querySelectorAll('.buttons__element').forEach(button => {
    button.addEventListener('click', (e) => {
        const template = e.target.getAttribute('data-template');
        loadTemplate(template);
    });
});
document.querySelectorAll('.navi__buttons li a svg').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const template = e.target.getAttribute('data-template');
        loadTemplate(template);
    })
})

function arrowSmooth(template) {
    console.log(template);
    if (template == 'templates/template1.html') {
        document.querySelector('.arrow').classList.add('visible');
    }
    else if (template == 'templates/template3.html') {
        document.querySelector('.left').classList.add('visible');
    }
    else if (template == 'templates/template2.html') {
        document.querySelector('.arrow').classList.add('visible');
        document.querySelector('.left').classList.add('visible');
    }
}

function setupSmoothScroll() {
    let navi = document.querySelector('.navi');
    const naviHeight = navi.offsetHeight;
    const navbarToggle = document.querySelector('.navbar-toggle');

    document.querySelectorAll('.navbar-collapse ul li a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const container = document.querySelector('.viewport');
            const targetPosition = targetElement.getBoundingClientRect().top + container.scrollTop;
            const offsetPosition = targetPosition - naviHeight;
            container.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        })
    });
    if (navbarToggle && window.getComputedStyle(navbarToggle).display !== 'none') {
        document.querySelector('.navbar-collapse').classList.remove('show');
        navbarToggle.classList.add('collapsed');
        if (document.querySelector('.navbar-collapse').classList.contains('show')) {
            navbarToggle.click();
        }
    }
};

function modal() {
    // Get the modal
    var modal = document.getElementById("modal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    var images = document.querySelectorAll('.gallery-item img');
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            console.log("Image clicked:", this.src);
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    var span = document.getElementsByClassName("close")[0];

    span.addEventListener('click', function () {
        modal.style.display = "none";
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

function send() {
    function addClass() {
        document.querySelector('#add-sent').classList.add("sent");

    }

    const sendLetter = document.getElementById("sendLetter");
    sendLetter.addEventListener("click", addClass);
};


// timer

function timer() {
    var animation = {
        newYear: document.querySelector('.time'),
        range: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        get period() {
            var dateFuture = new Date("2024-08-31T16:00:00");
            var dateFuture2 = "31 Sierpień 2024"
            var dateNow = new Date();
            var seconds = Math.floor((dateFuture - (dateNow)) / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);
            hours = hours - (days * 24);
            minutes = minutes - (days * 24 * 60) - (hours * 60);
            seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
            return {
                year: dateFuture2,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }
        },
        element: function (parent, type, className, html) {
            var element = document.createElement(type);
            element.className = className;
            if (typeof html !== "undefined") element.innerHTML = html;
            parent.appendChild(element);
            return element;
        },
        year: function (className) {
            var timeline = new TimelineMax();
            var year = animation.element(animation.newYear, "div", className);
            for (var i = 0; i <= String(animation.period.year).length - 1; i++) {
                var digit = animation.element(year, "div", "digit", String(animation.period.year).substr(i, 1));
                digit.style.top = (0 - (digit.clientHeight * 2)) + "px";
                timeline
                    .to(digit, 0.25, { top: 0, opacity: 1, ease: Bounce.easeOut });
            }
            return year;
        },
        animate: function () {
            var year1 = animation.year("year year1");
            var year2 = animation.year("year year2");
            var controls = animation.element(animation.newYear, "div", "controls");
            var days = animation.element(controls, "div", "control days");
            var hours = animation.element(controls, "div", "control hours");
            var minutes = animation.element(controls, "div", "control minutes");
            var seconds = animation.element(controls, "div", "control seconds");
            animation.controls = {
                controls: controls,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
            animation.render();
            var triangles = animation.element(year1, "div", "triangles");
            var fullTimeline = new TimelineMax();
            var triangleStorage = [];
            for (var i = 0; i <= 50 - 1; i++) {
                var timeline = new TimelineMax({ repeat: -1 });
                var triangle = animation.element(triangles, "div", "triangle");
                triangle.style.top = -50 + "px";
                var time = animation.range(0, 100) / 100;
                var duration = 1;
                var direction = animation.range(1, 2) == 1 ? -1 : 1;
                timeline
                    .set(triangle, { scale: animation.range(10, 20) / 10 }, time)
                    .to(triangle, duration * 0.5, { opacity: 1 }, time)
                    .to(triangle, duration, { top: "200%", rotationZ: animation.range(180, 360) * direction, rotationX: animation.range(180, 360) * direction }, time)
                    .to(triangle, duration * 0.5, { opacity: 0 }, time + (duration * 0.5));
                fullTimeline.add(timeline, 0);
                triangleStorage.push(triangle);
            }
            var previousWidth = 0;
            var checkWidth = function () {
                if (Math.abs(previousWidth - year1.clientWidth) > 1) {
                    for (var i = 0; i <= triangleStorage.length - 1; i++) {
                        triangleStorage[i].style.left = (-5 + animation.range(0, year1.clientWidth)) + "px";
                    }
                    previousWidth = year1.clientWidth;
                }
                setTimeout(checkWidth, 100);
            }
            checkWidth();
            return new TimelineMax()
                .to(days, 0.5, { top: 0, opacity: 1 }, 0)
                .to(hours, 0.5, { top: 0, opacity: 1 }, 0.25)
                .to(minutes, 0.5, { top: 0, opacity: 1 }, 0.5)
                .to(seconds, 0.5, { top: 0, opacity: 1 }, 0.75)
                .set(triangles, { opacity: 1 }, 3)
                .add(fullTimeline, 3);
        },
        plural: function (property) {
            var period = animation.period;
            if (String(period[property]).length <= 1) period[property] = "0" + period[property];
            return Number(period[property]) > 1 ? period[property] + " " + property : period[property] + " " + property.substr(0, property.length - 1);
        },
        render: function () {
            animation.controls.seconds.innerHTML = animation.plural("seconds");
            animation.controls.minutes.innerHTML = animation.plural("minutes");
            animation.controls.hours.innerHTML = animation.plural("hours");
            animation.controls.days.innerHTML = animation.plural("days");
            requestAnimationFrame(animation.render);
        }
    };
    animation.animate();
};

function specialButton() {
    const buttons = document.querySelectorAll('.special-buttons__item');
    const container = document.getElementById('specialContainer');
    const content = {
        description: '<p>Drodzy Bliscy, Krewni i Internetowi Towarzysze, Z ekscytacją i nutą niedowierzania ogłaszamy, że postanowiliśmy wreszcie zrobić coś niesamowicie odważnego – pobrać się! Tak, to prawda, zespół „My i Nasze Szalone Pomysły” wraca z nową produkcją. Kto jest zaproszony? Każdy, kto kiedykolwiek przetrwał nasze historie na Instagramie, odpowiedział na nasze wiadomości z gifami, lub po prostu jest gotów świętować z nami, niezależnie od tego, jak dawno nas widział! (Tak, Ty też, sąsiedzie, który zawsze podbiera nasz Wi-Fi 😄) Kiedy? W dniu, który jeszcze nie zdarzył się w kalendarzu Majów (czyli po prostu w sobotę, 31 sierpnia 2024 roku o 16:00). Gdzie? W magicznym ogrodzie przy zamku, którego jeszcze nie widzieliście – w końcu kto by pomyślał, że coś takiego istnieje w naszym mieście? Jeśli nie zdążycie znaleźć tego miejsca na mapie, wszystkie szczegóły znajdziecie w kolejnych kafelkach, dobrej zabawy!</p>',
        church: '<h3>Wiemy jak ciężko tu trafić więc przygotowaliśmy specjalną mapkę <i class="fa-solid fa-face-laugh-wink"></i></h3> <div class="castle"><img src="../img/third-page/1.png" alt=""></div>',
        place: '<h3>Tu już z górki, na pewno traficie</h3> <div class="castle"><img src="../img/third-page/2.png" alt=""></div>',
        map: '<div id="map"></div>',
        contact: '<div class="third-contact"><div class="third-contact__half"><img src="../img/third-page/pexels-comoyuli-26242019.jpg" alt="Profile photo"><h3>Matylda</h3><p><a href="tel:+4870044485">+4870044485</a></p><div class="third-contact__social"><ul><li><a target="_blank" href="https://www.facebook.com/people/WGCraftDesign/61560779991721/"><i class="fa-brands fa-facebook-f"></i></a></li><li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li><li><a href="#"><i class="fa-brands fa-instagram"></i></a></li><li><a href="#"><i class="fa-regular fa-paper-plane"></i></a></li></ul></div></div><div class="third-contact__half"><img src="../img/third-page/pexels-mizunokozuki-12898970.jpg" alt="Profile photo"><h3>Dawid</h3><p><a href="tel:+48500600700">+48500600700</a></p><div class="third-contact__social"><ul><li><a target="_blank" href="https://www.facebook.com/people/WGCraftDesign/61560779991721/"><i class="fa-brands fa-facebook-f"></i></a></li><li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li><li><a href="#"><i class="fa-brands fa-instagram"></i></a></li><li><a href="#"><i class="fa-regular fa-paper-plane"></i></a></li></ul></div></div></div>'
    };

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            const key = button.getAttribute('data-content');
            container.innerHTML = content[key];
            if (key === 'map') {
                loadMap();
            }
        });

        button.addEventListener('click', function () {
            const key = button.getAttribute('data-content');
            container.innerHTML = content[key];
        });
    });
}

function loadMap() {
    function loadMapet(url, callback) {
        var script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';

        script.onload = function () {
            if (callback) callback();
        };

        document.head.appendChild(script);
    }

    loadMapet('https://unpkg.com/leaflet/dist/leaflet.js', function () {
        var map = L.map('map').setView([54.35095, 18.65639], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([54.35206, 18.65906]).addTo(map)
            .bindPopup('Hotel Królewski, Gdańsk, Polska')
        L.marker([54.34980, 18.65301]).addTo(map)
            .bindPopup('Bazylika Mariacka, Gdańsk, Polska')
            .openPopup();
    });
}

