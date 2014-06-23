
/*******************************************************************************

             d888                888         8888888
            d88P"                888           888
            888                  888           888
            888888  8888b.   .d88888  .d88b.   888   88888b.
            888        "88b d88" 888 d8P  Y8b  888   888 "88b
            888    .d888888 888  888 88888888  888   888  888
            888    888  888 Y88b 888 Y8b.      888   888  888
            888    "Y888888  "Y88888  "Y8888 8888888 888  888

*******************************************************************************/


function reveal_animate_fadeIn_(selector)
{
  reveal_animate_fadeInLeft(selector);
  reveal_animate_fadeInRight(selector);
}

function reveal_animate_fadeInLeft(selector, remove_animation_class)
{
  $(selector+' .reveal-fadeInLeft')
    .removeClass('invisible')
      .addClass('animated fadeInLeft')
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function()
          {
            if (remove_animation_class){
              $(this)
                .removeClass('animated')
                  .removeClass('fadeInLeft');
            }
          }
        );
}

function reveal_animate_fadeInRight(selector, remove_animation_class)
{
  $(selector+' .reveal-fadeInRight')
    .removeClass('invisible')
      .addClass('animated fadeInRight')
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function()
          {
            if (remove_animation_class){
              $(this)
                .removeClass('animated')
                  .removeClass('fadeInRight');
            }
          }
        );
}

function reveal_animate_fadeInUp(selector, remove_animation_class)
{
  selector = selector+'.reveal-fadeInUp'
  $(selector)
    .removeClass('invisible')
      .addClass('animated fadeInUp')
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function()
          {
            if (remove_animation_class){
              $(this)
                .removeClass('animated')
                  .removeClass('fadeInUp');
            }
          }
        );
}

function reveal_animate_fadeInDown(selector, remove_animation_class)
{
  console.log("reveal_animate_fadeInDown("+selector+'.reveal-fadeInDown)');
  $(selector+'.reveal-fadeInDown')
    .removeClass('invisible')
      .addClass('animated fadeInDown')
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function()
          {
            if (remove_animation_class){
              $(this)
                .removeClass('animated')
                  .removeClass('fadeInDown');
            }
          }
        );
}

/*******************************************************************************

         .d888               888           .d88888b.           888
        d88P"                888          d88P" "Y88b          888
        888                  888          888     888          888
        888888  8888b.   .d88888  .d88b.  888     888 888  888 888888
        888        "88b d88" 888 d8P  Y8b 888     888 888  888 888
        888    .d888888 888  888 88888888 888     888 888  888 888
        888    888  888 Y88b 888 Y8b.     Y88b. .d88P Y88b 888 Y88b.
        888    "Y888888  "Y88888  "Y8888   "Y88888P"   "Y88888  "Y888

*******************************************************************************/

function reveal_animate_fadeOut_(selector)
{
  reveal_animate_fadeOutLeft(selector);
  reveal_animate_fadeOutRight(selector);
}


function reveal_animate_fadeOutLeft(selector)
{
  $(selector+' .reveal-fadeInLeft')
    .addClass('animated fadeOutLeft')
      .one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function(){
          $(this).addClass('invisible')
            .removeClass('animated')
              .removeClass('fadeOutLeft');
        }
      );
}


function reveal_animate_fadeOutRight(selector)
{
  $(selector+' .reveal-fadeInRight')
    .addClass('animated fadeOutRight')
      .one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function(){
          $(this).addClass('invisible')
            .removeClass('animated')
              .removeClass('fadeOutRight');
        }
      );
}




/*******************************************************************************

                   .d888 888 d8b         8888888
                  d88P"  888 Y8P           888
                  888    888               888
                  888888 888 888 88888b.   888   88888b.
                  888    888 888 888 "88b  888   888 "88b
                  888    888 888 888  888  888   888  888
                  888    888 888 888 d88P  888   888  888
                  888    888 888 88888P" 8888888 888  888
                                 888
                                 888
                                 888

*******************************************************************************/


function reveal_animate_flipInX(selector, remove_animation_class)
{
  selector = selector+'.reveal-flipInX'
  $(selector)
    .removeClass('invisible')
      .addClass('animated flipInX')
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function()
          {
            if (remove_animation_class){
              $(this)
                .removeClass('animated')
                  .removeClass('flipInX');
            }
          }
        );
}

function reveal_animate_flipInY(selector, remove_animation_class)
{
  selector = selector+'.reveal-flipInY'
  $(selector)
    .removeClass('invisible')
      .addClass('animated flipInY')
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function()
          {
            if (remove_animation_class){
              $(this)
                .removeClass('animated')
                  .removeClass('flipInY');
            }
          }
        );
}
