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
        })
        .catch(error => console.error('Błąd wczytywania szablonu:', error));
}

// Dodanie nasłuchiwania na kliknięcia przycisków nawigacyjnych
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const template = e.target.getAttribute('data-template');
        loadTemplate(template);
    });
});

