// var linkEvent = false;

$(window).load(function() {

    getNavItemsSize();

    // getHeaderStyles();

});

$(window).resize(function() {

    getNavItemsSize();

    getHeaderStyles();

    onScroll();

    // linkEvent = false;

});

$(document).scroll(function() {

    getHeaderStyles();

    onScroll();

    // linkEvent = false;

});

$(document).ready(function() {

    getHeaderStyles();

    onScroll();

    // linkEvent = false;

     $('.main-nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        // $(document).off("scroll");

        // linkEvent = true;
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            // $(document).on("scroll", onScroll);
        });

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

    } else {

        $(".site-header").removeClass("fixed");

    }

}

function onScroll(event){

    var scrollPos = $(document).scrollTop();

    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        // if( linkEvent == false ) {

            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu-center ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }

        // }

    });

}