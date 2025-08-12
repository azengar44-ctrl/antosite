const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', function () {
        let offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.5 + "px";
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#reservation form');
    if (!form) return;
    form.setAttribute('action', 'https://formspree.io/f/mnqebjdd');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        const data = new FormData(form);

        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert('Votre demande a été envoyée avec succès. Nous vous contacterons rapidement.');
            form.reset();
        } else {
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    });
});
