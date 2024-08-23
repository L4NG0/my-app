export const arrowSmooth = (template) => {
    if (template === 'templates/template1.html') {
        document.querySelector('.arrow').classList.add('visible');
    } else if (template === 'templates/template3.html') {
        document.querySelector('.left').classList.add('visible');
    } else if (template === 'templates/template2.html') {
        document.querySelector('.arrow').classList.add('visible');
        document.querySelector('.left').classList.add('visible');
    }
};
