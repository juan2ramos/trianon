$(function () {

    /* Form */

    var owl = $("#owl-demo");


    owl.owlCarousel({
        autoPlay: 5000,
        navigation: true,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        transitionStyle: "fade",
        navigationText: [
            "<i class='icon-chevron-left icon-white'><</i>",
            "<i class='icon-chevron-right icon-white'>></i>"
        ]
    });


});

$('.button-nav').on('click', function () {
    $(this).toggleClass('translateButtonNav');
    $('nav').toggleClass('positionOriginal');

});
