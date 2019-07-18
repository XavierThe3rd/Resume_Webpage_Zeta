//--introDivAppends--//



//--gearTopAppends--//



//--AboutAppend--//



//--ResumeAppend--//


//--SlideShowAppends--//

var crtAbt = createAbout();

var slidehold = document.getElementById("p-aboutPhaze-trig" );
var slidebtnL = document.getElementById("buttonLeft");
var slidebtnR = document.getElementById("buttonRight");

var aboutId = document.getElementById("aboutHolder");
var introId= document.getElementById("introHolder");
var resumeId = document.getElementById("resumeHolder");



//function Load(){
    introId.appendChild(introDiv);
    aboutId.appendChild(crtAbt);
    resumeId.appendChild(resHld);       
    introPhaze("#titleWrap", "body","100%");
    introPhaze("#aboutPhaze", "#aboutHolder","100%");
    introPhaze("#resumePhaze", "#p-aboutPhaze-trig","100%");
    
    gearRotation("#gearWhole", "90", "body", "150%");
    gearRotation("#gearQ1", "-320", "body", "150%");
    gearRotation("#gearQ2", "-320", "body", "150%");
    gearRotation("#gearQ3", "390", "body", "150%");
    
    gearRotation("#gearHalfLeft", "-170", "body", "220%");
    gearRotation("#gearHalfRight", "180", "body", "220%");
    gearRotation("#gearHalfBottom", "-180", "body", "220%");
    
    gearRotation("#gearmidWhole", "-90", "#aboutPhaze", "220%");
    gearRotation("#gearQ1res", "320", "#aboutPhaze", "220%");
    gearRotation("#gearQ2res", "360", "#aboutPhaze", "220%");
    gearRotation("#gearQ3res", "-320", "#aboutPhaze", "220%");
    gearRotation("#gearHalf1", "-180", "#aboutPhaze", "220%");
    gearRotation("#gearHalf2", "180", "#aboutPhaze", "220%");
    gearRotation("#gearHalf3", "180", "#aboutPhaze", "220%");
    gearRotation("#gearFW", "90", "#aboutPhaze", "220%");
//}
//}

function aboutPage(){

    introId.appendChild(introDiv);
    aboutId.appendChild(crtAbt);
    resumeId.appendChild(resHld);       
    introPhaze("#titleWrap", "body","100%");
    introPhaze("#aboutPhaze", "#p1-toptrig","100%");
    introPhaze("#resumePhaze", "#p-aboutPhaze-trig","100%");
    
    gearRotation("#gearWhole", "90", "body", "150%");
    gearRotation("#gearQ1", "-320", "body", "150%");
    gearRotation("#gearQ2", "-320", "body", "150%");
    gearRotation("#gearQ3", "390", "body", "150%");
    
    gearRotation("#gearHalfLeft", "-170", "body", "150%");
    gearRotation("#gearHalfRight", "180", "body", "150%");
    gearRotation("#gearHalfBottom", "-180", "body", "150%");
    
    gearRotation("#gearmidWhole", "-90", "#aboutPhaze", "150%");
    
}


function codePage(){
    introId.removeChild(introDiv);
    aboutId.removeChild(crtAbt);
    resumeId.removeChild(resHld);
}

function codePage(){
    introId.removeChild(introDiv);
    aboutId.removeChild(crtAbt);
    resumeId.removeChild(resHld);
}
