(function () {

    // burger
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }  

    // Slader-gallery

    new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });

    // slader-back

    new Swiper('.testimonials__slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }
        }
    });


})()