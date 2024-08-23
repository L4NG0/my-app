export const specialButton = () => {
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
};

const loadMap = () => {
    const loadMapet = (url, callback) => {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';

        script.onload = () => {
            if (callback) callback();
        };

        document.head.appendChild(script);
    };

    loadMapet('https://unpkg.com/leaflet/dist/leaflet.js', () => {
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
