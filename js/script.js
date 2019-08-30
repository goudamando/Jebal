/* Sticky Menu */
$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('.menu').addClass('fixed-header');
        $('.menu div').addClass('visible-title');
    }
    else {
        $('.menu').removeClass('fixed-header');
        $('.menu div').removeClass('visible-title');
    }
});

/* scrollToTop */
jQuery(document).ready(function () {

    "use strict";


    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});


jQuery(document).ready(function () {

    "use strict";


    $(".popup-client > span").on("click", function () {
        $(".account-popup-sec").addClass("active");
        $("html").addClass("no-scroll");
    });

    $(".close-popup").on("click", function () {
        $(".account-popup-sec").removeClass("active");
        $("html").removeClass("no-scroll");
    });

    $('.menu-toggle').on("click", function () {
        $(".menu nav").slideToggle();
    });

    // Get Header Height //
    var stick = $(".simple-header.for-sticky").height();
    $(".simple-header.for-sticky").parent().css({
        "padding-top": stick
    });


    $("header").on("click", function (e) {
        e.stopPropagation();
    });
    $(".menu-item-has-children > a").on("click", function () {
        $(this).parent().siblings().children("ul").slideUp();
        $(this).parent().siblings().removeClass("active");
        $(this).parent().children("ul").slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    });


    // $('#price-range').priceRange({});
    // $("#price-range").on("slide", function(slideEvt) {
    //     $("#priceVal").text(slideEvt.value[0] + " - " + slideEvt.value[1] + " EGP");
    // });
    
    // $('#property-geo').areaRange();
    // $("#property-geo").on("slide", function(slideEvt) {
    //     $("#areaVal").text(slideEvt.value[0] + " - " + slideEvt.value[1] + " SQMETER");
    // });

    
    $("#rangePrice").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 6000,
        max: 10000000,
        from: 6000,
        to: 5000000,
        type: 'double',
        step: 1,
        prefix: "EGP ",
        grid: true,
        onChange: function (data) {
            $("#priceVal").text("EGP " + data.from + " - " + "EGP " + data.to);
        },
        onStart: function (data) {
            $("#priceVal").text("EGP " + data.from + " - " + "EGP " + data.to);
        },
    });

    $("#rangeArea").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 120,
        max: 1000,
        from: 120,
        to: 500,
        type: 'double',
        step: 1,
        prefix: "m2 ",
        grid: true,
        onChange: function (data) {
            $("#areaVal").text("m2 " + data.from + " - " + "m2 " + data.to);
        },
        onStart: function (data) {
            $("#areaVal").text("m2 " + data.from + " - " + "m2 " + data.to);
        },
    });
    
    $("#rangePayment").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 200,
        max: 100000,
        from: 15000,
        to: 30000,
        type: 'single',
        step: 1,
        prefix: "EGP ",
        grid: true,
        onChange: function (data) {
            $("#paymentVal").text("EGP " + data.from);
        },
        onStart: function (data) {
            $("#paymentVal").text("EGP " + data.from);
        },
    });

    $("#rangeYear").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 5,
        max: 30,
        from: 10,
        to: 20,
        type: 'single',
        step: 1,
        prefix: "YEARS ",
        grid: true,
        onChange: function (data) {
            $("#yearVal").text(data.from + " YEARS");
        },
        onStart: function (data) {
            $("#yearVal").text(data.from + " YEARS");
        },
    });

    $("#rangeInterest").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 5,
        max: 30,
        from: 10,
        to: 20,
        type: 'single',
        step: 1,
        prefix: "% ",
        grid: true,
        onChange: function (data) {
            $("#interestVal").text(data.from + " %" );
        },
        onStart: function (data) {
            $("#interestVal").text(data.from + " %");
        },
    });
    

    /*** FIXED Menu APPEARS ON SCROLL DOWN ***/
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".for-sticky").addClass("sticky");
        } else {
            $(".for-sticky").removeClass("sticky");
            $("for-sticky").addClass("");
        }
    });


    /*=================== Parallax ===================*/
    $('.parallax').scrolly({
        bgParallax: true
    });

    // site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });


    /** Calculate **/
    $(document).on('keyup',"#fieldPhone",function(){
        var val = $(this).val();
        if(val.length == 0)
        {
             $("#fieldCalc").slideUp();
        }
        else
        {
             $("#fieldCalc").slideDown();
        }
   })
   

});