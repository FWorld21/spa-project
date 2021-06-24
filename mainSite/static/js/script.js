'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const showModalElement = document.querySelectorAll('[data-modal]'),
          closeModalWindowElement = document.querySelectorAll('[data-modal-close]'),
          modalWindow = document.querySelector('.modal'),
          burgerMenu = document.querySelector('.burger-menu'),
          navModal = document.querySelector('.modal__nav'),
          mobileNavigation = document.querySelector('#mob-menu').querySelectorAll('li');
    
    const showModalWindow  = (modal) => {
        if (modal.classList.contains('hide')) {
            modal.classList.add('show');
            modal.classList.remove('hide');
            modal.classList.add('fade');   
        }
    };

    const closeModalWindow = (modal) => {
        if (modal.classList.contains('show')) {
            modal.classList.remove('show');
            modal.classList.add('hide');
        }
    };

    showModalElement.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            showModalWindow(modalWindow);
        });
    });

    closeModalWindowElement.forEach(item => {
        item.addEventListener('click', () => {
            closeModalWindow(modalWindow);
            closeModalWindow(navModal);
        });
    });

    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow) {
            closeModalWindow(modalWindow);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModalWindow(modalWindow);
        }
    });

    burgerMenu.addEventListener('click', () => {
        showModalWindow(navModal);
    });

    navModal.addEventListener('click', (event) => {
        if (event.target == navModal || event.target == document.querySelector('.modal__border')) {
            closeModalWindow(navModal);
        }
    });

    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    $(document).ready(function(){
        $("#mob-menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    mobileNavigation.forEach(item => {
        item.addEventListener('click', () => {
            closeModalWindow(navModal);
        });
    });
});