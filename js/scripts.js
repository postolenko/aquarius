$(window).load(function() {

    getNavItemsSize();

    getHeaderStyles();

});

$(window).resize(function() {

    getNavItemsSize();

    getHeaderStyles();

});

$(document).scroll(function() {

    getHeaderStyles();

});

$(document).ready(function() {
   


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