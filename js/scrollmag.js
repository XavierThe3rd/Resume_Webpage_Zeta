
function introPhaze(phazer, trig, dur){
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: trig,
        triggerHook: 0,
        duration: dur
    })
    .setClassToggle(phazer, "visible") // add class to reveal
    .addTo(controller);
}

function gearRotation(gear, rot, trig, dur){
    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.to(gear, 1, {rotation: rot, ease: Linear.easeNone});
    new ScrollMagic.Scene({
            triggerElement: trig,
            duration: dur,
            triggerHook: 0,

        })
    .setTween(tween)
    .setPin("#target", {pushFollowers: false})
    .addTo(controller);
}
    

introPhaze("#titleWrap", "body","100%");
introPhaze("#aboutPhaze", "#bottomlogoTrig","100%");
introPhaze("#resumePhaze", "#p-aboutPhaze-trig","100%");

gearRotation("#gearWhole", "90", "body", "100%");
gearRotation("#gearQuarter", "-320", "body", "100%");
gearRotation("#gearHalfLeft", "-170", "body", "100%");
gearRotation("#gearHalfRight", "180", "body", "100%");