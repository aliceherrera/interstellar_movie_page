document.addEventListener('DOMContentLoaded', function() {


    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < 400) {
            ocultaLogoHeader();
        } else {
            exibeLogoHeader();
        }
    })
})

function ocultaLogoHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function exibeLogoHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}