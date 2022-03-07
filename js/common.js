function scrollTopMenu() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1) {
            $(".header-top").addClass("fixed");
            $(".header-top").addClass("fixed");
        } else {
            $(".header-top").removeClass("fixed");
        }
    });
};

function MenuReponsive() {
    $(window).bind('load', function() {
        $(".btn_open .btn_side").click(function() {
            if (!$("a.btn_side").hasClass("open")) {
                $("a.btn_side").addClass("open");
                $("#gnavi").addClass("open");
                $(".header-top").addClass("open");
            } else {
                $("a.btn_side").removeClass("open");
                $("#gnavi").removeClass("open");
                $(".header-top").removeClass("open");
            }

        });
        var gnavi = $("#gnavi>ul>li.sub>a");
        $(gnavi).click(function() {
            if ($(window).width() < 751) {
                if ($(this).hasClass('open')) {
                    $(this).removeClass('open');
                    $(this).next("ul").slideToggle('open');
                } else {
                    $(this).removeClass('open');
                    $(this).addClass('open');
                    $(this).next("ul").slideToggle('open');
                }
            }
        });
    });

};

$().ready(function() {
    scrollTopMenu();
    MenuReponsive();
});