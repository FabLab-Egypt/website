/*======================================================================*/
/*=== Execute On Documente Ready                                     ===*/
$(document).ready(function() {

  /*======================================================================*/
  /* fullPage -- Initaliz and Configure                                ===*/
    $('#full-page').fullpage({
      'anchors': ['About','Services' ,'Machines', '3D-Printer', 'Laser-Cutter', 'Vinly-Cutter', 'Milling-Machine', 'Power-Tools', 'Memberships', 'Contacts', ],
      'animateAnchor': true,
      'autoScrolling': true,
      'easing': 'easeInQuart',
      'resize' : false,
      'verticalCentered': true,

      //////////////////////////////////////////////////////
      // Callbacks                                        //
      'afterLoad': function(anchorLink, index){
        switch(anchorLink) {
          case '3D-Printer':
            reveal_animate('#machines-makerbot .machine-image',  'fadeInRight',   false, 'animation-delay-100ms');
            reveal_animate('#machines-makerbot .machine-info',  'fadeInLeft',  false, 'animation-delay-300ms');
            break;
          case 'Laser-Cutter':
            reveal_animate('#machines-morn .machine-image',  'fadeInLeft',   false, 'animation-delay-100ms');
            reveal_animate('#machines-morn .machine-info',  'fadeInRight',  false, 'animation-delay-300ms');
            break;
          case 'Milling-Machine':
            reveal_animate('#machines-modela .machine-image',  'fadeInLeft',   false, 'animation-delay-100ms');
            reveal_animate('#machines-modela .machine-info',  'fadeInRight',  false, 'animation-delay-300ms');
            break;
          case 'Vinly-Cutter':
            reveal_animate('#machines-vinyl .machine-image',  'fadeInRight',   false, 'animation-delay-100ms');
            reveal_animate('#machines-vinyl .machine-info',  'fadeInLeft',  false, 'animation-delay-300ms');
            break;
          case 'Memberships':
            reveal_animate('#memberships .pricing-table .panel',  'fadeInUpBig', false);
            break;
          case 'Contacts':
            reveal_animate('#contacts .map-overlay .panel',  'pulse',   false);
            // reveal_animate_chain('#contacts .map-overlay .panel',  ['fadeIn','pulse'], ['chain-1','chain-2'], false);
            break;
          default:
            reveal_animate('.section.active .machine.vending .machine-image',  'fadeInRight',   false);
            reveal_animate('.section.active .machine.vending .machine-info',  'fadeInLeft',  false, 'animation-delay-300ms');
            break;
        }
      },
      // 'onLeave': function(index, newIndex, direction){
      //   // console.log('onLeave::index: '+index+'->'+newIndex);
      //   switch(index){
      //     case 3:
      //       reveal_animate_fadeOut_('#machines-makerbot');
      //       break;
      //     default:
      //       reveal_animate_fadeOut_('.section.active .machine.vending');
      //       break;
      //   }
      // },
      //                                        Callbacks //
      //////////////////////////////////////////////////////


    });
  /*======================================================================*/

  /*======================================================================*/
  /* fullPage-controls -- Styling Classes                              ===*/
    $("#full-page .controlArrow.prev").append('<i class="fa fa-chevron-left fa-3x"></i>');
    $("#full-page .controlArrow.next").append('<i class="fa fa-chevron-right fa-3x"></i>');
  /*======================================================================*/

  /*======================================================================*/
  /* fullPage-slidesNav -- Styling Classes                             ===*/
    // $(".fullPage-slidesNav").addClass('hidden-xs')
    // $(".fullPage-slidesNav").css("margin-left", "0px");
    // $(".fullPage-slidesNav > ul").addClass('nav nav-pills')
    // $(".fullPage-slidesNav > ul li:nth-child(1) a").empty().prepend("");
  /*======================================================================*/

});
/*===========================================Execute On Documente Ready===*/
