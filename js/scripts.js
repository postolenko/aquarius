$(window).load(function() {

    getNavItemsSize();

    $(".scroll").mCustomScrollbar();

});

$(window).resize(function() {

    getNavItemsSize();

    getHeaderStyles();

    getUserPosition();

    onScroll();

});

$(document).scroll(function() {

    getHeaderStyles();

    onScroll();

});

$(document).ready(function() {

    getHeaderStyles();

    getUserPosition();

    onScroll();

     $('.main-nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            menu = target;
            $target = $(target);

        if( $target.length > 0 ) {
        
            $('a').each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
            });
        }

    });

     $(".scroll-top").click(function() {

        $('html, body').animate({
            scrollTop: 0
        }, 500);

     });

});


function getNavItemsSize() {

    $(".main-nav").find("a").each(function() {

        var paddingNavItem = 30;
        var marginNavItem = 5;
        var itemNav = $(this).closest("li");

        itemNav.css({
            "width" : $(this).width() + paddingNavItem*2 + "px",
            "height" : $(this).height() + marginNavItem*2 + "px",
        });

    });

}


function getHeaderStyles() {

    if( $(".site-header").offset().top > 0 ) {

        $(".site-header").addClass("fixed");

        $(".scroll-top").fadeIn(300);

    } else {

        $(".site-header").removeClass("fixed");

        $(".scroll-top").fadeOut(300);

    }

}

function onScroll(event){

    var scrollPos = $(document).scrollTop();

    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if( refElement.length > 0 ) {

            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu-center ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }

        }

    });

}

function getUserPosition() {

    $(".user-levels .level-item").each(function() {

        if( $(this).hasClass("active") ) {

            var userLeftCoord = $(this).offset().left + $(this).find(".icon-box").width() / 2 - $(".user-step").width() / 2 ;

            $(".user-step").offset({left : userLeftCoord});

            console.log(userLeftCoord);

            return false;

        }
        

    });

}