/*======================================================================*/
/*=== Execute On Documente Ready                                     ===*/
$(document).ready(function() {

  /*======================================================================*/
  /* fullPage -- Initaliz and Configure                                ===*/
    $('#full-page').fullpage({
      'anchors': ['About', 'Services', 'Machines', '3D-Printer', 'Laser-Cutter', 'Vinly-Cutter', 'Milling-Machine', 'Memberships', 'Contacts', ],
      'animateAnchor': true,
      'autoScrolling': true,
      'easing': 'easeInQuart',
      'resize' : false,
      'verticalCentered': true,

      //////////////////////////////////////////////////////
      // Callbacks                                        //
      'afterLoad': function(anchorLink, index){
        switch(anchorLink) {
          case 'Machines':
            reveal_animate('#machines-main .machines .machines-title',  'fadeInDown',   false, 'animation-delay-200ms');
            reveal_animate('#machines-main .machines .machines-info',  'fadeInDown',   false, 'animation-delay-300ms');
            reveal_animate('#machines-main .machines .machines-icons .col:nth-child(3)',  'fadeInDown',   false, 'animation-delay-400ms');
            reveal_animate('#machines-main .machines .machines-icons .col:nth-child(2)',  'fadeInRight',   false, 'animation-delay-500ms');
            reveal_animate('#machines-main .machines .machines-icons .col:nth-child(4)',  'fadeInLeft',   false, 'animation-delay-500ms');
            reveal_animate('#machines-main .machines .machines-icons .col:nth-child(1)',  'fadeInRight',   false, 'animation-delay-600ms');
            reveal_animate('#machines-main .machines .machines-icons .col:nth-child(5)',  'fadeInLeft',   false, 'animation-delay-600ms');
            break;
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
          // case 'Power-Tools':
          //   reveal_animate('.section.active .machine.vending .machine-image',  'fadeInRight',   false, 'animation-delay-100ms');
          //   reveal_animate('.section.active .machine.vending .machine-info',  'fadeInLeft',  false, 'animation-delay-300ms');
          //   break;
          // case 'Memberships':
          //   reveal_animate('#memberships .pricing-table .panel',  'fadeInUpBig', false);
          //   break;
          // case 'Contacts':
          //   reveal_animate('#contacts .map-overlay .panel',  'flipInX',   false, 'animation-delay-100ms');
          //   // reveal_animate_chain('#contacts .map-overlay .panel',  ['fadeIn','pulse'], ['chain-1','chain-2'], false);
          //   break;
          default:
            // reveal_animate('.section.active .machine.vending .machine-image',  'fadeInRight',   false);
            // reveal_animate('.section.active .machine.vending .machine-info',  'fadeInLeft',  false, 'animation-delay-300ms');
            break;
        }
      },
      'onLeave': function(index, newIndex, direction){
        console.log('onLeave::index: '+index+'->'+newIndex+'  '+direction);
        anchors = ['About', 'Services' ,'Machines', '3D-Printer', 'Laser-Cutter', 'Vinly-Cutter', 'Milling-Machine', 'Memberships', 'Contacts' ];
        comingSection  = anchors[newIndex-1];
        pastingSection = anchors[index-1];
        console.log('onLeave::index: '+pastingSection+'->'+comingSection+'  '+direction);

        //In
        switch(comingSection){
          case 'Services':
              if(direction=='down'){ reveal_animate('#services .col',  'fadeInUpBig',   true, 'animation-delay-300ms'); }
              else if(direction=='up'){ console.log('services-up'); reveal_animate('#services .col',  'fadeInDownBig',   true, 'animation-delay-300ms'); }
              else {console.log('services-else :: "'+direction+'"');}
            break;
          case 'Memberships':
              if(direction=='down'){ reveal_animate('#memberships .pricing-table .panel',  'fadeInUpBig',   true, 'animation-delay-300ms'); }
              else if(direction=='up'){ console.log('services-up'); reveal_animate('#memberships .pricing-table .panel',  'fadeInDownBig',   true, 'animation-delay-300ms'); }
            break;
          case 'Contacts':
            reveal_animate('#contacts .map-overlay .panel',  'flipInX',   true, 'animation-delay-100ms');
            break;
          default:
            break;
        }

        //Out
        switch(pastingSection){
          case 'Services':
            if(direction=='down'){ reveal_animate('#services .col',  'fadeOutUp',   true, '', 'invisible'); }
            else if(direction=='up'){ reveal_animate('#services .col',  'fadeOutDown',   true, '', 'invisible'); }
          break;
          case 'Memberships':
            if(direction=='down'){ reveal_animate('#memberships .pricing-table .panel',  'fadeOutUp',   true, '', 'invisible'); }
            else if(direction=='up'){ reveal_animate('#memberships .pricing-table .panel',  'fadeOutDown',   true, '', 'invisible'); }
          break;
          case 'Contacts':
            reveal_animate('#contacts .map-overlay .panel',  'flipOutX',   true, '', 'invisible');
            break;
        default:
          break;
        }
      },
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
