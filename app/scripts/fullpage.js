'use strict';

/* global revealAnimate: true */

/*============================================================================*/
/*     Execute On Documente Ready                                             */
$(document).ready(function() {
    var sectionsAnchors = ['About', 'Services', 'Machines', '3D-Printer', 'Laser-Cutter', 'Vinly-Cutter', 'Milling-Machine', 'Electronics-Workbench', 'Memberships', 'Contacts', ];
    /*========================================================================*/
    /* fullPage -- Initaliz and Configure                                     */
    $('#full-page').fullpage({
            'anchors': sectionsAnchors,
            'animateAnchor': true,
            'autoScrolling': true,
            'easing': 'easeInQuart',
            'resize' : false,
            'verticalCentered': true,

            //////////////////////////////////////////////////////
            // Callbacks                                        //
            'afterLoad': function(anchorLink, index){
                console.log('>>fullpage.afterLoad:: anchorLink: '+anchorLink+', index:'+index);
                switch(anchorLink) {
                    case 'Machines':
                        revealAnimate('#machines-main .machines .machines-title',  'fadeInDown',   false, 'animation-delay-200ms');
                        revealAnimate('#machines-main .machines .machines-info',  'fadeInDown',   false, 'animation-delay-300ms');
                        revealAnimate('#machines-main .machines .machines-icons .col:nth-child(1)',  'fadeInRight',   false, 'animation-delay-600ms');
                        revealAnimate('#machines-main .machines .machines-icons .col:nth-child(2)',  'fadeInRight',   false, 'animation-delay-500ms');
                        revealAnimate('#machines-main .machines .machines-icons .col:nth-child(3)',  'fadeInRight',   false, 'animation-delay-400ms');

                        revealAnimate('#machines-main .machines .machines-icons .col:nth-child(4)',  'fadeInLeft',   false, 'animation-delay-400ms');
                        revealAnimate('#machines-main .machines .machines-icons .col:nth-child(5)',  'fadeInLeft',   false, 'animation-delay-500ms');
                        revealAnimate('#machines-main .machines .machines-icons .col:nth-child(6)',  'fadeInLeft',   false, 'animation-delay-600ms');
                        break;
                    case '3D-Printer':
                        revealAnimate('#machines-makerbot .machine-image',  'fadeInRight',   false, 'animation-delay-100ms');
                        revealAnimate('#machines-makerbot .machine-info',  'fadeInLeft',  false, 'animation-delay-300ms');
                        break;
                    case 'Laser-Cutter':
                        revealAnimate('#machines-morn .machine-image',  'fadeInLeft',   false, 'animation-delay-100ms');
                        revealAnimate('#machines-morn .machine-info',  'fadeInRight',  false, 'animation-delay-300ms');
                        break;
                    case 'Vinly-Cutter':
                        revealAnimate('#machines-vinyl .machine-image',  'fadeInRight',   false, 'animation-delay-100ms');
                        revealAnimate('#machines-vinyl .machine-info',  'fadeInLeft',  false, 'animation-delay-300ms');
                        break;
                    case 'Milling-Machine':
                        revealAnimate('#machines-modela .machine-image',  'fadeInLeft',   false, 'animation-delay-100ms');
                        revealAnimate('#machines-modela .machine-info',  'fadeInRight',  false, 'animation-delay-300ms');
                        break;
                    case 'Electronics-Workbench':
                        revealAnimate('#electronics-workbench .machine-image',  'fadeInRight',   false, 'animation-delay-100ms');
                        revealAnimate('#electronics-workbench .machine-info',  'fadeInLeft',  false, 'animation-delay-300ms');
                        break;
                    // case 'Power-Tools':
                    //   revealAnimate('.section.active .machine.vending .machine-image',  'fadeInRight',   false, 'animation-delay-100ms');
                    //   revealAnimate('.section.active .machine.vending .machine-info',  'fadeInLeft',  false, 'animation-delay-300ms');
                    //   break;
                    // case 'Memberships':
                    //   revealAnimate('#memberships .pricing-table .panel',  'fadeInUpBig', false);
                    //   break;
                    // case 'Contacts':
                    //   revealAnimate('#contacts .map-overlay .panel',  'flipInX',   false, 'animation-delay-100ms');
                    //   // revealAnimate_chain('#contacts .map-overlay .panel',  ['fadeIn','pulse'], ['chain-1','chain-2'], false);
                    //   break;
                    default:
                        // revealAnimate('.section.active .machine.vending .machine-image',  'fadeInRight',   false);
                        // revealAnimate('.section.active .machine.vending .machine-info',  'fadeInLeft',  false, 'animation-delay-300ms');
                        break;
                }
            },
            'onLeave': function(index, newIndex, direction){
                console.log('>>fullpage.onLeave::index: '+index+'->'+newIndex+'  '+direction);
                var comingSection  = sectionsAnchors[newIndex-1];
                var pastingSection = sectionsAnchors[index-1];
                console.log('>>fullpage.onLeave::index: '+pastingSection+'->'+comingSection+'  '+direction);

                //In
                switch(comingSection){
                    case 'Services':
                        if(direction==='down'){ revealAnimate('#services .col',  'fadeInUpBig',   true, 'animation-delay-300ms'); }
                        else if(direction==='up'){ console.log('services-up'); revealAnimate('#services .col',  'fadeInDownBig',   true, 'animation-delay-300ms'); }
                        else {console.log('>>fullpage.onLeave.services-else :: "'+direction+'"');}
                        break;
                    case 'Memberships':
                        if(direction==='down'){ revealAnimate('#memberships .pricing-table .panel',  'fadeInUpBig',   true, 'animation-delay-300ms'); }
                        else if(direction==='up'){ console.log('>>fullpage.onLeave.services-up'); revealAnimate('#memberships .pricing-table .panel',  'fadeInDownBig',   true, 'animation-delay-300ms'); }
                        break;
                    case 'Contacts':
                        revealAnimate('#contacts .map-overlay .panel',  'flipInX',   true, 'animation-delay-100ms');
                        break;
                    default:
                        break;
                }

                //Out
                switch(pastingSection){
                    case 'Services':
                        if(direction==='down'){ revealAnimate('#services .col',  'fadeOutUp',   true, '', 'invisible'); }
                        else if(direction==='up'){ revealAnimate('#services .col',  'fadeOutDown',   true, '', 'invisible'); }
                        break;
                    case 'Memberships':
                        if(direction==='down'){ revealAnimate('#memberships .pricing-table .panel',  'fadeOutUp',   true, '', 'invisible'); }
                        else if(direction==='up'){ revealAnimate('#memberships .pricing-table .panel',  'fadeOutDown',   true, '', 'invisible'); }
                        break;
                    case 'Contacts':
                        revealAnimate('#contacts .map-overlay .panel',  'flipOutX',   true, '', 'invisible');
                        break;
                    default:
                        break;
                }
            },
            //                                        Callbacks //
            //////////////////////////////////////////////////////


        });
    /*========================================================================*/

    /*========================================================================*/
    /* fullPage-controls -- Styling Classes                                   */
    $('#full-page .controlArrow.prev').append('<i class="fa fa-chevron-left fa-3x"></i>');
    $('#full-page .controlArrow.next').append('<i class="fa fa-chevron-right fa-3x"></i>');
    /*========================================================================*/

    /*========================================================================*/
    /* fullPage-slidesNav -- Styling Classes                                  */
        // $('.fullPage-slidesNav').addClass('hidden-xs')
        // $('.fullPage-slidesNav').css('margin-left', '0px');
        // $('.fullPage-slidesNav > ul').addClass('nav nav-pills')
        // $('.fullPage-slidesNav > ul li:nth-child(1) a').empty().prepend('');
    /*========================================================================*/

});
/*============================================= Execute On Documente Ready ===*/
