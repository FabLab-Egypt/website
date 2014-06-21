/*======================================================================*/
/* Brand Text-Color vs Slide Backgound                               ===*/
  function brand_darkBackgound(){
        $('#brand .title h2').switchClass('background-light','background-dark', 100, "easeInOutQuad");
        $('#brand .title ul').switchClass('background-light','background-dark', 100, "easeInOutQuad");
  };
  function brand_lightBackgound(){
        $('#brand .title h2').switchClass('background-dark', 'background-light', 100, "easeInOutQuad");
        $('#brand .title ul').switchClass('background-dark', 'background-light', 100, "easeInOutQuad");
  }
/*======================================================================*/

/*======================================================================*/
/*=== Execute On Documente Ready                                     ===*/
$(document).ready(function() {

  /*======================================================================*/
  /* fullPage -- Initaliz and Configure                                ===*/
    $('#full-page').fullpage({
      'resize' : false,
      'animateAnchor': true,
      'verticalCentered': true,

      // Callbacks
      'afterLoad': function(anchorLink, index){
        // console.log('afterLoad::index: '+index);
        switch(index){
          case 3:
            reveal_animate_fadeIn_('#machines-makerbot',false);
            break;
          default:
            reveal_animate_fadeIn_('.section.active .machine.vending',false);
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

    });
    // $.fn.fullpage.moveTo(0,4);
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
