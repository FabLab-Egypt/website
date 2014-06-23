
function reveal_animate(selector, animation, remove_animation_class, addclasses)
{
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

function reveal_animate_chain(selector, animation_array, addclasses, remove_addclasses)
{

  if (!addclasses) { addclasses=''; }
  else if (addclasses instanceof Array) {
    this_addclasses = addclasses[0];
    addclasses.shift();
  }
  else if (addclasses instanceof String) {
    this_addclasses = addclasses;
  }

  $(selector)
    .removeClass('invisible')
      .addClass(this_addclasses+' animated '+animation_array[0])
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function()
          {
            console.log("::> reveal_animate_chain:done");

            $(this)
              .removeClass('animated')
                .removeClass(animation_array[0]);
            console.log("::> animation classe removed");

            if(remove_addclasses){ $(this).removeClass(remove_addclasses) }

            if (animation_array.length >= 1) {
              console.log("::> preparing next chained animation.");
              animation_array.shift();
              reveal_animate_chain(selector, animation_array, addclasses, remove_addclasses);
            }

          }
        );

}
