$('a[href^="#"]').click(function() {
    var the_id = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(the_id).offset().top - 149
    }, 'slow');
    return false;
});


/* For changing menu */
window.onscroll = (function() {

    /* -150 for the height of the header */
    if ($(window).scrollTop() <= $('section#features').position().top - 150) {

        $("header nav ul li").removeClass('selected');
        $("header nav ul li.home-item").addClass('selected');
    }

    if ($(window).scrollTop() > $('section#features').position().top - 150 && $(window).scrollTop() <= $('section#usage').position().top - 150) {

        $("header nav ul li").removeClass('selected');
        $("header nav ul li.features-item").addClass('selected');
    }

    if ($(window).scrollTop() > $('section#usage').position().top - 150 && $(window).scrollTop() <= $('section#contact').position().top - 150) {

        $("header nav ul li").removeClass('selected');
        $("header nav ul li.usage-item").addClass('selected');
    }

    if ($(window).scrollTop() > $('section#contact').position().top - 150) {

        $("header nav ul li").removeClass('selected');
        $("header nav ul li.contact-item").addClass('selected');
    }



});