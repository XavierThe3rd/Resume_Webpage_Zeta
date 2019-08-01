
export function introPhaze(phazer, trig, dur){
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: trig,
        triggerHook: 0,
        duration: dur
    })
    .setClassToggle(phazer, "visible") // add class to reveal
    .addTo(controller)
    //.addIndicators();
}

export function gearRotation(gear, rot, trig){
   
    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.to(gear, 1, {rotation: rot, ease: Linear.easeNone});
    new ScrollMagic.Scene({
            triggerElement: trig,
            duration: "200%",
            triggerHook: 0.09,

        })
    .setTween(tween)
    .addTo(controller)
    //.addIndicators();
}


