/**
 * scroll
 */
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
    $('.scroll-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});

/**
 * Gallery
 */

$(function () {
    $('.myphotos').glisse({speed: 500, changeSpeed: 550, effect:'roll', fullscreen: false});
});


/**
 * scroll-link
 */
$('.js-inner-link').on('click', function(){

    var target = '#'+$(this).attr('data-target');
    var target_offset = $(target).offset().top;
    $('body').animate({scrollTop: target_offset}, 900);

});