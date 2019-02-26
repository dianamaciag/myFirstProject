// menu hamburger

const nav = document.querySelector('nav');
const burger = document.querySelector('div.burger');
const bars = document.querySelector('.fa-bars');
const cross = document.querySelector('.fa-times');

burger.addEventListener('click', () => {

    nav.classList.toggle('mobile');

    bars.classList.toggle('active');
    cross.classList.toggle('active');


})

// pop-up

const popupSwitchOn = document.querySelector('nav ul li:last-child');
const sideWrapper = document.querySelector('.wrapper');
const modalWrap = document.querySelector('.modal-wrap');
const popupSwitchOff = document.querySelector('.modal-wrap .modal .close');


popupSwitchOn.addEventListener('click', () => {

    modalWrap.classList.add('active');
    sideWrapper.classList.add('active');

});

popupSwitchOff.addEventListener('click', () => {

    modalWrap.classList.remove('active');
    sideWrapper.classList.remove('active');

});

modalWrap.addEventListener('click', (e) => {
    modalWrap.classList.remove('active');
    sideWrapper.classList.remove('active');
})


// scroll to section after click on menu item

const $topper = $('header .topper');
const $menu = $('nav');
const $cross = $('.fa-times')
const $burger = $('.fa-bars')

const closeMobileMenu = () => {

    $menu.removeClass('mobile');
    $cross.removeClass('active');
    $burger.addClass('active');

}

$('nav .home, .banner .arrow').on('click', () => {

    $('body, html').animate({
        scrollTop: 0
    }, 1000)

    if ($menu.hasClass('mobile')) closeMobileMenu();

});

$('nav .about').on('click', () => {

    $('body, html').animate({
        scrollTop: ($('section.about').offset().top) - ($topper.innerHeight()) - 1
    }, 1000)

    if ($menu.hasClass('mobile')) closeMobileMenu();

});

$('nav .services').on('click', () => {

    $('body, html').animate({
        scrollTop: ($('section.services').offset().top) - ($topper.innerHeight())
    }, 1000)


    if ($menu.hasClass('mobile')) closeMobileMenu();

});

$('nav .contact').on('click', () => {

    $('body, html').animate({
        scrollTop: ($('section.contact').offset().top) - ($topper.innerHeight())
    }, 1000)


    if ($menu.hasClass('mobile')) closeMobileMenu();

});



// moving elements after scroll 

$(window).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    const $title1 = $('.about .title');
    const $title2 = $('.services .title');
    const $title3 = $('.contact .title');

    const $text1 = $('.about .text');
    const $text2 = $('.services .text');
    const $text3 = $('.contact .text');


    if (scrollValue > windowHeight / 2) {
        $title1.addClass('active');
        $text1.addClass('active');
        $('.banner .arrow').removeClass('hide')
    }

    if (scrollValue > windowHeight * 1.7) {
        $title2.addClass('active');
        $text2.addClass('active');
    }

    if (scrollValue > windowHeight * 2.7) {

        $title3.addClass('active');
        $text3.addClass('active');
    }

    if (scrollValue < windowHeight / 2) {
        $('section .title, section .text').removeClass('active');
        $('.banner .arrow').addClass('hide')
    }

});