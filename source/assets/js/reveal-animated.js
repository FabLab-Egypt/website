
function reveal_animate(selector, animation, remove_animation_class, addclasses)
{
  // selector = selector+'.reveal-'+animation;
  selector = selector;
  $(selector)
    .removeClass('invisible')
      .addClass(addclasses+' animated '+animation)
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function()
          {
            if (remove_animation_class){
              $(this)
                .removeClass('animated')
                  .removeClass(animation);
            }
          }
        );
}
