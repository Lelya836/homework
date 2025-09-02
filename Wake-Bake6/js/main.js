
(function () {
    //==============  БУРГЕР  ==============
    // Открытие/закрытие бургер-меню
    document.querySelector('.burger-icon').addEventListener('click', function (e) {
        // e.preventDefault(); // Отменяет переход по ссылке
        document.body.classList.toggle('body--opened-menu')
    })
    // Закрытие меню и прокрутка к пункту
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function (e) {
            // Закрываем меню
            document.body.classList.remove('body--opened-menu')
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

    //==============  МОДАЛКА  ==============

    const modalBtn = document.querySelector('.about__img-button')
    const modal = document.querySelector('.modal')
    const modalCancel = document.querySelector('.modal__cancel')
    const body = document.body

    // Открытие модалки
    modalBtn.addEventListener('click', openedModal)

    function openedModal(e) {
        e.preventDefault()
        body.classList.toggle('body--opened-modal')
    }
    // Закрытие модалки
    function closeModal() {
        body.classList.remove('body--opened-modal')
    }
    // Закрытие по крестику и оверлею 
    modal.addEventListener('click', (e) => {
        const target = e.target

        if (target.closest('.modal__cancel') || target === modal) {

            e.preventDefault()
            closeModal()
        }
    })
    // Закрытие по Esc
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && body.classList.contains('body--opened-modal')) {
            closeModal()
        }
    })

    //==============  ТАБЫ  ==============

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link-active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activControl = document.querySelector('.tab-controls__link-active')
        const activContent = document.querySelector('.tab-content--show')

        if (activControl) {
            activControl.classList.remove('tab-controls__link-active')
        }
        if (activContent) {
            activContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link-active')
        tabContent.classList.add('tab-content--show')

    }

    //==============  АККАРДЕОН  ==============

    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {
            const accordionList = e.currentTarget
            const accordionControl = e.target.closest('.accordion-list__control')

            if (!accordionControl) return

            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')

            // Закрываем ранее открытый элемент, если он существует и не является текущим
            if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
                const openedContent = accordionOpenedItem.querySelector('.accordion-list__content')
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                if (openedContent) {
                    openedContent.style.maxHeight = '0'
                }
            }

            // Переключаем текущий элемент
            const isOpening = !accordionItem.classList.contains('accordion-list__item--opened')
            accordionItem.classList.toggle('accordion-list__item--opened')

            if (isOpening) {
                // Сначала сбрасываем высоту, затем устанавливаем точное значение
                accordionContent.style.maxHeight = '0'
                requestAnimationFrame(() => {
                    // accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
                    accordionContent.style.maxHeight = '100%'
                })
            } else {
                accordionContent.style.maxHeight = '0'
            }
        })
    })


//==============  СЛАЙДЕР-ГАЛЕРЕЯ  ==============

new Swiper('.gallery__swiper', {
    slidesPerView: 1.3,
    spaceBetween: 16,
    pagination: {
        el: '.gallery__pagination',
        type: "fraction",
    },

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },
    breakpoints: {
        451: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        801: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        1101: {
            slidesPerView: 4,
            spaceBetween: 32
        }
    }
});

//==============  СЛАЙДЕР-ОТЗЫВЫ  ==============

new Swiper('.testimonials__slider', {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,

    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },
    scrollbar: {
        el: ".testimonials__scrollbar",
        draggable: true,
    },
    breakpoints: {
        451: {
            slidesPerView: 1.1
        },
        901: {
            slidesPerView: 1.5
        },
        1201: {
            slidesPerView: 2
        }
    }
});

//==============  ???  ==============
})()