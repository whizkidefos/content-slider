$(document).ready(function(){
    $('.image-slider').slick ({
        autoplay: true,
        draggable: true,
        infinite: true,
        autoplaySpeed: 2400,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1800,
        cssEase: 'cubic-bezier(0.84, 0, 0.08, 0.99)',
        asNavFor: '.text-slider',
        centerMode: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
    
    $('.text-slider').slick({
        autoplay: true,
        draggable: true,
        infinite: true,
        autoplaySpeed: 2400,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1800,
        cssEase: 'cubic-bezier(0.84, 0, 0.08, 0.99)',
        asNavFor: '.image-slider',
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});