/*======================================================================*/
/* Brand Text-Color vs Slide Backgound                               ===*/
  function brand_darkBackgound(){
        $('#brand .dm_title h2').switchClass('background-light','background-dark', 100, "easeInOutQuad");
        $('#brand .dm_title ul').switchClass('background-light','background-dark', 100, "easeInOutQuad");
  };
  function brand_lightBackgound(){
        $('#brand .dm_title h2').switchClass('background-dark', 'background-light', 100, "easeInOutQuad");
        $('#brand .dm_title ul').switchClass('background-dark', 'background-light', 100, "easeInOutQuad");
  }
/*======================================================================*/

/*======================================================================*/
/*=== Execute On Documente Ready                                     ===*/
$(document).ready(function() {

  /*======================================================================*/
  /* fullPage -- Initaliz and Configure                                ===*/
    $('#full-page').fullpage({
        menu: '#menu',
        resize : false,
        autoScrolling: false,
        animateAnchor: true,
        loopHorizontal: false,
        verticalCentered: true,
        slidesNavigation: true,
        slidesNavPosition: 'top pull-left',

        // Callbacks
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
          console.log('slideIndex: '+slideIndex);
          switch(slideIndex){
            case 2:
              brand_darkBackgound();
              break;
            default:
              brand_lightBackgound();
              break;
          }
        },
    });
    $.fn.fullpage.moveTo(0,4);
  /*======================================================================*/

  /*======================================================================*/
  /* fullPage-controls -- Styling Classes                              ===*/
    $("#full-page .controlArrow.prev").append('<i class="fa fa-chevron-left fa-3x"></i>');
    $("#full-page .controlArrow.next").append('<i class="fa fa-chevron-right fa-3x"></i>');
  /*======================================================================*/

  /*======================================================================*/
  /* fullPage-slidesNav -- Styling Classes                             ===*/
    $(".fullPage-slidesNav").addClass('hidden-xs')
    $(".fullPage-slidesNav").css("margin-left", "0px");
    $(".fullPage-slidesNav > ul").addClass('nav nav-pills')
    $(".fullPage-slidesNav > ul li:nth-child(1) a").empty().prepend("Contacts");
    $(".fullPage-slidesNav > ul li:nth-child(2) a").empty().prepend("Psych Tests");
    $(".fullPage-slidesNav > ul li:nth-child(3) a").empty().prepend("Problems");
    $(".fullPage-slidesNav > ul li:nth-child(4) a").empty().prepend("Services");
    $(".fullPage-slidesNav > ul li:nth-child(5) a").empty().prepend("About");
  /*======================================================================*/

});
/*===========================================Execute On Documente Ready===*/
