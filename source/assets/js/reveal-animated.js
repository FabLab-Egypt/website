function reveal_animate_fadeIn_(selector)
{
  reveal_animate_fadeInLeft(selector);
  reveal_animate_fadeInRight(selector);
}


function reveal_animate_fadeInLeft(selector)
{
  $(selector+' .reveal-fadeInLeft')
    .removeClass('invisible')
      .addClass('animated fadeInLeft')
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function()
          {
            $(this)
              .removeClass('animated')
                .removeClass('fadeInLeft');
          }
        );
}


function reveal_animate_fadeInRight(selector)
{
  $(selector+' .reveal-fadeInRight')
    .removeClass('invisible')
      .addClass('animated fadeInRight')
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function()
          {
            $(this)
              .removeClass('animated')
                .removeClass('fadeInRight');
          }
        );
}

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
