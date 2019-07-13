
function introPhaze(phazer, trig, dur){
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: trig,
        triggerHook: 0,
        duration: dur
    })
    .setClassToggle(phazer, "visible") // add class to reveal
    .addTo(controller)
    .addIndicators();
}

function gearRotation(gear, rot, trig, dur){
    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.to(gear, 1, {rotation: rot, ease: Linear.easeNone});
    new ScrollMagic.Scene({
            triggerElement: trig,
            duration: dur,
            triggerHook: 0.09,

        })
    .setTween(tween)
    .setPin("#target", {pushFollowers: false})
    .addTo(controller);
}
    

introPhaze("#titleWrap", "body","100%");
introPhaze("#aboutPhaze", "#p1-toptrig","100%");
introPhaze("#resumePhaze", "#p-aboutPhaze-trig","100%");

gearRotation("#gearWhole", "90", "body", "120%");
gearRotation("#gearQ1", "-320", "body", "120%");
gearRotation("#gearQ2", "-320", "body", "120%");
gearRotation("#gearQ3", "390", "body", "120%");
gearRotation("#gearHalfLeft", "-170", "body", "120%");
gearRotation("#gearHalfRight", "180", "body", "120%");
gearRotation("#gearHalfBottom", "-180", "body", "120%");