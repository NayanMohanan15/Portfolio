
var typed = new Typed('#element', {
    strings: ['a Frontend developer', 'UI/UX designer'],
    typeSpeed: 50,
});

var typed = new Typed('#element-education', {
    strings: ['Silver Medalist,'],
    typeSpeed: 50,
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! Your message has been submitted.`);

        contactForm.reset();
    });
});


document.querySelector(".stack").addEventListener('click', () => { 
    window.scrollTo({top:0,behavior:"smooth"})
})