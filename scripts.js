$(function() {
    $('.hamburger-menu').on('click', function() {  // hethy besh besh ne7lou el menu ki yenzel al button
        $('.toggle').toggleClass('open');          
        $('.nav-list').toggleClass('open');
    });

    AOS.init({
        easing: 'ease',
        duration: 1000,
    })
});
