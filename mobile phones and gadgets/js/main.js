(function () {

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

})()



const swiper = new Swiper('.mySwiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1, // О
    speed: 500, // С
});

