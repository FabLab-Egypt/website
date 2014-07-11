'use strict';

/* exported revealAnimate */
/* exported revealAnimateChain */

function revealAnimate(selector, animation, removeAnimationClass, addClasses, completionClasses)
{
    $(selector)
        .removeClass('invisible')
            .addClass(addClasses+' animated '+animation)
                .one(
                    'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                    function()
                    {
                        if (removeAnimationClass){
                            $(this)
                                .removeClass('animated')
                                    .removeClass(animation);
                        }

                        if(completionClasses){
                            $(this)
                                .addClass(completionClasses);
                        }
                    }
                );
}

function revealAnimateChain(selector, animationArray, addClasses, removeAddClasses)
{
    var thisAddClasses = '';
    if (!addClasses) { addClasses=''; }
    else if (addClasses instanceof Array) {
        thisAddClasses = addClasses[0];
        addClasses.shift();
    }
    else if (addClasses instanceof String) {
        thisAddClasses = addClasses;
    }

    $(selector)
        .removeClass('invisible')
            .addClass(thisAddClasses+' animated '+animationArray[0])
                .one(
                    'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                    function()
                    {
                        console.log('::> revealAnimateChain:done');

                        $(this)
                            .removeClass('animated')
                                .removeClass(animationArray[0]);
                        console.log('::> animation classe removed');

                        if(removeAddClasses){ $(this).removeClass(removeAddClasses); }

                        if (animationArray.length >= 1) {
                            console.log('::> preparing next chained animation.');
                            animationArray.shift();
                            revealAnimateChain(selector, animationArray, addClasses, removeAddClasses);
                        }

                    }
                );

}
