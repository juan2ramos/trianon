$(function () {

    /* Form */
    $('#form').on("submit", function (e) {
        e.preventDefault();
        var fields = $(this).serializeArray();

        $.post("email.php", fields, responseForm, 'json');
        $('#button').prop("disabled", true);


    });

    function responseForm(r) {

        if (r.success == 0) {

            alert("Revisa los campos");
            $('#button').prop("disabled", false);
        }
        else {
            $('.content-form').text('');
            $('#form').append("<span class='message'>" + r.message + "<span>");
        }
    }

    var owl = $("#owl-demo");


    owl.owlCarousel({
        autoPlay: 5000,
        navigation: true,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        transitionStyle: "fade"
    });

    owl.on('changed.owl.carousel', function (e) {
        console.log(e)
        if (e.item.index == 0)
            $('.owl-prev').hide();
        else
            $('.owl-prev').show();
        if (e.page.count == (e.page.index + 1))
            $('.owl-next').hide();
        else
            $('.owl-next').show();

    })
});

$('.open-nav').on('click', function () {
    $(this).toggleClass('translate');
    $('header').toggleClass('show-header');

});
$('.images figcaption').on('click', function () {
    $(this).toggleClass('more');

});
$(window).resize(updateSize);
