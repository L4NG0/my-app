function setupSmoothScroll(naviHeight) {
    document.querySelectorAll('.navbar-collapse ul li a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const container = document.querySelector('.viewport');
            const targetPosition = targetElement.getBoundingClientRect().top + container.scrollTop;
            const offsetPosition = targetPosition - naviHeight;
            container.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        });
    });
}


export default setupSmoothScroll;