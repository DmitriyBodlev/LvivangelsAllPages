$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    
});

$(document).ready(function () {

    //Меню навігації
    var touch = $('#touch-menu');
    var menu = $('.site-nav');

    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function () {
        var width = $(window).width();
        if (width > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    //Слайдер
    function slider() {
        if ($("#slider ul li").hasClass("slide-active")) {
            if ($("#slider ul li.slide-active").is("#slider ul li:last")) {
                $(".slide-active").fadeOut(2000);
                $(".slide-active").removeClass("slide-active");
                $("#slider ul li:first").addClass("slide-active");
                $(".slide-active").fadeIn(2000);
            } else {
                $(".slide-active").fadeOut(2000);
                $(".slide-active").next().addClass("slide-active");
                $(".slide-active:first").removeClass("slide-active");
                $(".slide-active").fadeIn(2000);
            }
        } else {
            $("#slider ul li:first").addClass("slide-active").show();
        }
        setTimeout(slider, 10000);
    }
    slider();

    //Висота
    function sliderHeight() {
        var slideHeight = $(".slide-active").height();
        $("#slider").height(slideHeight);
        setTimeout(sliderHeight, 0);
    }
    sliderHeight();


    $('site-nav a').click(function() {
        if($(this).hasClass('nav-link-focus')) return;
        $(this).addClass('nav-link-focus');
    })


    //Новини
    $(".news-item").click(function () {
        $(this).find(".news-open").slideToggle();
        if ($(this).hasClass("activeNews")) {
            $(".activeNews").removeClass("activeNews");
        } else {
            $(this).addClass("activeNews");
        }
    })


    //Галерея
    $('.slick').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }
      ]
    });
    

    var gallery = $('.photos').gallerify({
    margin:5,
    mode:{
        maxHeight: screen.height * 0.5,
        breakPoints:[
            {
                minWidth: 1170,
                columns: 4,
            },{
                minWidth: 970,
                columns: 3,
            },{
                minWidth: 750,
                columns: 2,
            },{
                maxWidth: 750,
                columns: 1,
            }
        ]
    },
        lastRow:'adjust'
    }); 
    for(i = 1; i <= 8; i++) {
        $('.photos-main').append('<a href="img/gallery/big/'+i+'.jpg"><img src="img/gallery/big/'+i+'.jpg"></a>');
    }
    for(i = 1; i <= 15; i++) {
        $('.photos-gallery-1').append('<a href="img/gallery/competitions/'+i+'.jpg"><img src="img/gallery/competitions/'+i+'.jpg"></a>');
    }
    for(i = 1; i <= 12; i++) {
        $('.photos-gallery-2').append('<a href="img/gallery/gathering/'+i+'.jpg"><img src="img/gallery/gathering/'+i+'.jpg"></a>');
    }
    for(i = 1; i <= 7; i++) {
        $('.photos-gallery-3').append('<a href="img/gallery/training/'+i+'.jpg"><img src="img/gallery/training/'+i+'.jpg"></a>');
    }
    for(i = 1; i <= 9; i++) {
        $('.photos-gallery-4').append('<a href="img/gallery/events/'+i+'.jpg"><img src="img/gallery/events/'+i+'.jpg"></a>');
    }
    $('.photos').gallerify.renderAsyncImages();



    $(document).ready(function () {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    });
    
    $('.map-links > li > a').click(function() {
        var linkClass = $(this).attr('class');
        console.log(linkClass[9]);
        $('iframe').hide();
        $('.iframe-' + linkClass[9]).show();
    })
    
    return false;
});