const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')


window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

navLinksLi.forEach(li => li.addEventListener('click', ()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLinks.classList.remove('active')

}))


var options = {
    strings: [
        
        'Descansa con',
        'Charlotte'
        
    ],
    typeSpeed: 50,  // Ajusta este valor para ralentizar la velocidad
    backSpeed: 80,  // Velocidad al borrar el texto (ajustable si quieres que sea más lento al borrar)
    backDelay: 4000,
    loop: true,  // Loop infinito
    loopCount: Infinity,
};

var typed = new Typed('#hero-titles', options);

// AOS
AOS.init();


AOS.init({
    duration: 8000, // Duración de la animación en milisegundos
    once: true // Si la animación debe ocurrir solo una vez
});

// JavaScript para manejar la selección de estrellas en la calificación
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
        let stars = document.querySelectorAll('.star');
        stars.forEach(star => star.classList.remove('selected'));
        this.classList.add('selected');
        let rating = this.getAttribute('data-value');
        console.log('Calificación seleccionada:', rating);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.add-to-cart');
    const cartAnimation = document.createElement('div');
    cartAnimation.classList.add('cart-animation');
    document.body.appendChild(cartAnimation);

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            cartAnimation.textContent = `${productName} añadido al carrito`;
            cartAnimation.classList.add('active');

            setTimeout(() => {
                cartAnimation.classList.remove('active');
            }, 2500);

            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        fetch('cart.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `action=add&id=${productId}`
        }).then(response => response.text())
          .then(data => {
              console.log(data);
          });
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.image-box').forEach(box => {
        observer.observe(box);
    });

    document.querySelectorAll('.text-content').forEach(text => {
        observer.observe(text);
    });

    document.querySelectorAll('.option').forEach(option => {
        observer.observe(option);
    });
});

