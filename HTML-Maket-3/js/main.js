(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {


        const burgerIcon = e.target.closest('burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        console.log('работает');

        document.body.classList.add('body--opened-menu')

    }

})()