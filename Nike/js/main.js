(function () {
    //==============  БУРГЕР  ==============
    // Открытие/закрытие бургер-меню
    const header = document.querySelector('header');
    const body = document.body;
    document.querySelector('.burger-icon').addEventListener('click', function (e) {
        // e.preventDefault(); // Отменяет переход по ссылке
        header.classList.toggle('body--opened-menu')
        body.classList.toggle('menu-open')
    })
    // Закрытие меню и прокрутка к пункту
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function (e) {
            // Закрываем меню
            header.classList.remove('body--opened-menu')
            body.classList.remove('menu-open')
            // Прокрутка к секции
            const targetId = this.getAttribute('href')
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Отменяем стандартное поведение только для якорных ссылок
                const targetSection = document.querySelector(targetId)
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    //==============  СЛАЙДЕР-ВИДЖЕТ  ==============

    new Swiper('.widget__swiper', {
        slidesPerView: 1.3,
        spaceBetween: 16,

        navigation: {
            nextEl: '.widget__next',
            prevEl: '.widget__prev',
        },
        breakpoints: {
            451: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            801: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            1101: {
                slidesPerView: 3,
                spaceBetween: 56
            }
        }
    });


    //==============  ЛУЧШИЕ МОДЕЛИ СЛАЙДЕР  ==============
    new Swiper('.swiper', {
        centeredSlides: true,
        slidesPerView: 1.5,
        spaceBetween: 20,

        breakpoints: {
            451: {
                slidesPerView: 2.5,
                spaceBetween: 40
            },
            801: {
                slidesPerView: 2.7,
                spaceBetween: 40
            },
            1101: {
                slidesPerView: 3,
                spaceBetween: 45
            }
        }
    });

    //==============  КОПИРОВАНИЕ ЛОГОТИПОВ БРЕНДОВ  ==============
    var copy = document.querySelector('.logos-carousel__wrapper').cloneNode(true)
    document.querySelector('.logos-carousel').appendChild(copy)

    //==============  ???  ==============

})()