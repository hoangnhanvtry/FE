// anchor in page

function initBackToTop() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#toTop').fadeIn(300);
        } else {
            $('#toTop').fadeOut(300);
        }
    });

    $('#toTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

}
// anchor top page #
$(window).bind('load', function() {
    "use strict";
    var hash = location.hash;
    if (hash) {
        var p1 = $(hash).offset();
        if ($(window).width() > 750) {
            $('html,body').animate({ scrollTop: p1.top - 100 }, 400);
        } else {
            $('html,body').animate({ scrollTop: p1.top - 100 }, 400);
        }
    }

});

$().ready(function() {
    initBackToTop();
});