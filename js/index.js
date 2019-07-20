$(".search-btn1").click(function () {

    $(".search-content1").css("display", "block");
})
$(document).mouseup(function (e) {
    var container = $(".search-content1");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
});

$(".search-btn2").click(function () {

    $(".search-content2").css("display", "block");
})
$(document).mouseup(function (e) {
    var container = $(".search-content2");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
});


$(".search-btn3").click(function () {

    $(".search-content3").css("display", "block");
})
$(document).mouseup(function (e) {
    var container = $(".search-content3");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
});

/*-----------------------------------------------------------------------------*/


var limit = 4;
$(".input-days").on('change', function (evt) {
    if ($("input[name='day']:checked").length > limit) {
        this.checked = false;
    }
});

var limitt = 1;
$(".input-days1 , .input-days2 , .input-days3").on('change', function (evt) {
    if ($("input[name='day']:checked").length > limitt) {
        this.checked = false;
    }
});

var limittt = 2;
$(".input-days-1 , .input-days-2 , .input-days-3").on('change', function (evt) {
    if ($("input[name='day']:checked").length > limittt) {
        this.checked = false;
    }
});

/*--------------------------------------------------------------------------------------*/

$("#t-tab , .nav-tour").click(function () {

    $("#btn1").html($("#t-tab").html());
})


$("#Hotel-tab , .nav-hotel").click(function () {

    $("#btn1").html($("#Hotel-tab").html());
})

$("#Activity-tab , .nav-activi").click(function () {

    $("#btn1").html($("#Activity-tab").html());
})







/*-------------------------------------------------*/

$('.owl-carousel').owlCarousel({
    touchDrag: true,
    pagination: false,
    navigation: true,
    margin: 10,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            loop: true
        },
        400: {
            items: 2,
            loop: true
        },
        700: {
            items: 3,
            loop: true
        },
        1000: {
            items: 4,
            loop: true,
            nav: true
        }
    }
})

/*----------------------------------------------*/

$(".nav-home").on('click', function () {
    $('html, body').animate({
        'scrollTop': $("body").position().top - 100
    }, 500);
});


$(".nav-hotel , .nav-tour , .nav-activi").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".section4").position().top - 100
    }, 500);
});


$(".nav-hotel").click(function () {

    $('.nav-tabs #Hotel-tab').tab('show');
})

$(".nav-tour").click(function () {

    $('.nav-tabs #Activity-tab').tab('show');
})

$(".nav-activi").click(function () {

    $('.nav-tabs #t-tab').tab('show');
})

/*-------------------------------------------------------*/

$(".nav-con").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".section5").position().top
    }, 500);
});


$(".nav-about").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".section6").position().top - 100
    }, 500);
});

$(".btn-off").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".section2").position().top - 50
    }, 500);
});

$(".btn-cop").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".section5").position().top - 100
    }, 500);
});

/*---------------------------------------------------------------------*/


$(document).ready(function () {

    $(".spinner").fadeOut(7000, function () {

        $(".loading-screen").fadeOut(7500);
        $("body").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden")

    });
})