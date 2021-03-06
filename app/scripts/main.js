'use strict';

/* global revealAnimate: true */
/* global Pace: true */

// PaceJS: As Pace Complete
Pace.once('done', function(){
    $('.remove-on-load').remove(); // fix loader images priorty load displacment.
    revealAnimate('.pace.pace-active', 'flipOutX',  false);
});

// PaceJS: After Pace Complete
Pace.on('done', function(){
    revealAnimate('#header .navbar', 'fadeInDown',  false, 'animation-delay-200ms');
    revealAnimate('#header .navbar .navbar-brand', 'fadeInDown',  false, 'animation-delay-300ms');
    revealAnimate('#header .navbar ul.nav', 'fadeInDown',  false, 'animation-delay-300ms');
    revealAnimate('#about .reveal h2',  'fadeInUp',  false, 'animation-delay-600ms');
    revealAnimate('#about .reveal p', 'fadeInDown',  false, 'animation-delay-700ms');
});


/******************************************************/
/** On Document Load                                 **/

$(function()
{
    //BS: tooltip
    $('.machine-icons').tooltip();

    // MatchHeightJS
    $('#services .thumbnail').matchHeight();
    $('.machines .col').matchHeight();

    // Slick Slide
    $('.machine-slick-slide').slick({
        'lazyLoad': 'ondemand',
        'slidesToShow': 5,
        'slidesToScroll': 1,
        'onBeforeChange': function (index){
            console.log(':::>slick.onBeforeChange');
            revealAnimate(index, 'flipOutY',  true);

        }
    });
    $('.slick-slider .slick-prev').addClass('fa fa-caret-square-o-left');
    $('.slick-slider .slick-next').addClass('fa fa-caret-square-o-right');


    //popover-labsessions
    $('.popover-labsessions').popover({
        'trigger': 'hover',
        'content': ' try',
        // 'content': '<ul><li>Traning On Operation The machines<ul><li> Laser Cutter </li>'+
        // '<li> 3D Printer </li><li> Vinly Cutter </li><li> Milling Machine </li></ul></li>'+
        // '<li> Electronic Basics Course </li><li> Software Traning<ul>'+
        // '<li> Vector Design Using Inkescape </li><li> 2D CAD Design </li>'+
        // '<li> 3D Design / 3D CAD Design </li><li> Circut Desing </li></ul></li></ul>'
        // 'template': '<div class="popover" role="tooltip"><div class="arrow"></div>'+
        // '<h3 class="popover-title">Free Lab Sessions</h3><div class="popover-content">'+
        // '<ul><li>Traning On Operation The machines<ul><li> Laser Cutter </li><li> 3D Printer </li>'+
        // '<li> Vinly Cutter </li><li> Milling Machine </li></ul></li><li> Electronic Basics Course </li>'+
        // '<li> Software Traning<ul><li> Vector Design Using Inkescape </li><li> 2D CAD Design </li>'+
        // '<li> 3D Design / 3D CAD Design </li><li> Circut Desing </li></ul></li></ul></div></div>',

    });


    // Swap Slider Image with the Machines
    // $('.machine-slick-slide .slick-cover').click(function(){
    //     console.log(":::> machine-slick-slide:: ");
    //     var img_src = $(this).attr('data-imgsrc');
    //     var machine_image = $(this).parents('.machine').children(".machine-image").children("img");
    //     var defualt_machine_image = machine_image.attr('src');
    //
    //
    //     console.log(":::> machine-slick-slide:: img_src: "+img_src);
    //     console.log(":::> machine-slick-slide:: machine_image: "+machine_image);
    //     console.log(":::> machine-slick-slide:: defualt_machine_image: "+defualt_machine_image);
    //     machine_image.attr('src', img_src);
    //     machine_image.attr('data-src', defualt_machine_image);
    // });

    // Socila Links Hover Animation
    $('.social > .col').mouseenter(
        function(){
            revealAnimate(this, 'tada',  true);
        }
    );
});



/******************************************************/
/** Lightbox: for Slick Slider                       **/
$(document).ready(function() {
    var $lightbox = $('#lightbox');

    $('[data-target="#lightbox"]').on('click', function() {
        var src = $(this).attr('data-img'),
            alt = $(this).attr('data-alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };

        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
        $lightbox.addClass('invisible');
    });

    $lightbox.on('shown.bs.modal', function () {
        var $img = $lightbox.find('img');

        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');

        revealAnimate($lightbox, 'bounceInDown',  true);
    });

    $lightbox.on('hidden.bs.modal', function () {
        $lightbox.find('img').attr('src', '');
        $lightbox.find('img').attr('alt', '');
        $lightbox.find('img').attr('style','');
        $lightbox.find('img').css('');
        $lightbox.find('.modal-dialog').css({'width': ''});
    });
});
