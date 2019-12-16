let swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    speed:5000,
    autoplay: {
        delay: 10000,
       disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




