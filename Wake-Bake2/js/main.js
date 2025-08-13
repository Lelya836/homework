
(function () {
    // Открытие/закрытие бургер-меню
    document.querySelector('.burger-icon').addEventListener('click', function (e) {
        // e.preventDefault(); // Отменяет переход по ссылке
        document.body.classList.toggle('body-opened-menu');
    })
    // Закрытие меню и прокрутка к пункту
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function (e) {
            // Закрываем меню
            document.body.classList.remove('body-opened-menu');
            // Прокрутка к секции
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Отменяем стандартное поведение только для якорных ссылок
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

})()
