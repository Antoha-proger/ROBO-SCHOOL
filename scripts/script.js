"use strict"

import Swiper from '../node_modules/swiper/swiper-bundle.min.mjs';

// Слайдер
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 40,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    }

});

window.addEventListener('DOMContentLoaded', () => {
    // Гамбургер меню
    const hamburger_menu = document.querySelector('.hamburger-menu');
    const nav_menu = document.querySelector('.header__nav');
    const body = document.querySelector('body');

    hamburger_menu.addEventListener('click', () => {
        hamburger_menu.classList.toggle('hamburger-menu_active');
        nav_menu.classList.toggle('header__nav_active');
        body.classList.toggle('body_active');
    });

    // Модальное окно
    const button = document.querySelectorAll('.more')[0];
    const modal_back = document.querySelector('.modal-back');
    const modal_btn_close = document.querySelector('.trainer__button-close');
    const gains_list = document.querySelectorAll('.trainer__btn-check');
    const modal_descr = document.querySelector('.trainer__modal-descr');

    button.addEventListener('click', () => {
        modal_back.style.visibility = 'visible';
    });

    modal_btn_close.addEventListener('click', () => {
        modal_back.style.visibility = 'hidden';
    });

    let content = {
        'Образование': `<div class="modal-edu trainer__modal-edu">
                                <p class="text trainer__edu">Сентябрь 1995 — Июнь 2000</p>
                                <p class="text trainer__edu">Санкт-Петербургский политехнический университет Петра Великого</p>
                                <p class="text trainer__edu">Факультет: Компьютерных наук и технологий</p>
                                <p class="text trainer__edu">Специальность: Математика и компьютерные науки</p>
                                <p class="text trainer__edu">Форма обучения: Очная</p>
                            </div>
                            <div class="modal-course trainer__modal-course">
                                <h3 class="subtitle modal-subtitle trainer__modal-subtitle">Курсы и тренинги</h3>
                                <p class="text modal-text trainer__modal-text">Ноябрь 2020 — Февраль 2021
                                    Программа дополнительного образования «3D Моделирование»
                                    Место проведения: Институт дополнительного образования «Политех»
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sequi ut consequuntur id quo ab pariatur, voluptatum dicta culpa eius odit quibusdam quos aliquid voluptatibus non omnis praesentium illum facilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, vel voluptas aspernatur voluptatem consequuntur animi consectetur quidem similique error expedita natus odit illo harum! Nihil facilis consequuntur quod amet dignissimos.</p>
            </div>`,
        'Опыт работы': `<p class="trainer__edu">С другой стороны, дальнейшее развитие различных форм деятельности не оставляет шанса для благоприятных перспектив. Идейные соображения высшего порядка, а также укрепление и развитие внутренней структуры однозначно фиксирует необходимость дальнейших направлений развития. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокое качество позиционных исследований напрямую зависит от модели развития! С учётом сложившейся международной обстановки, дальнейшее развитие различных форм деятельности в значительной степени обусловливает важность форм воздействия.</p>`,

        'Награды': `<p class="trainer__edu">Картельные сговоры не допускают ситуации, при которой элементы политического процесса призывают нас к новым свершениям, которые, в свою очередь, должны быть объявлены нарушающими общечеловеческие нормы этики и морали. Являясь всего лишь частью общей картины, диаграммы связей, инициированные исключительно синтетически, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. В своём стремлении повысить качество жизни, они забывают, что социально-экономическое развитие требует анализа инновационных методов управления процессами.</p>
        <p class="trainer__edu">Также как экономическая повестка сегодняшнего дня позволяет выполнить важные задания по разработке новых принципов формирования материально-технической и кадровой базы. Учитывая ключевые сценарии поведения, синтетическое тестирование выявляет срочную потребность системы обучения кадров, соответствующей насущным потребностям.</p>`,
    };

    // gains_list.forEach((item) => {
    //     item.addEventListener('change', function (event) {
    //         // if (event.checked) {
    //         //     alert(this.value)
    //             // let item_index = gains_list.indexOf(this);
    //             // alert(item_index)
    //             // modal_descr.innerHTML = content[item_index];
    //         // };
    //         alert(event.chacked)
    //     })
        
    // });

    for (let radio of gains_list) {
        radio.addEventListener('change', function (event) {
            if (this.checked) {
                let item_id = this.id;
                let label_text = document.querySelector(`label[for=${item_id}]`).textContent;
                modal_descr.innerHTML = content[label_text];
            }
        })
    }

})