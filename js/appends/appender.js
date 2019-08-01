import {introDiv} from ('./js/appends/topbox.js');
import {createAbout} from ('./js/appends/midbox.js');
import {infoHolder} from ('./js/appends/bottombox.js');
import {resHolder} from ('./js/appends/bottombox.js');

var crtAbt = createAbout();
var intrDiv= introDiv();
var infoHld = infoHolder();
var resHld = resHolder();

var aboutId = document.getElementById("aboutHolder");
var introId = document.getElementById("introHolder");
var resumeId = document.getElementById("resumeHolder");

function aboutPage() {
    introId.appendChild(intrDiv);
    aboutId.appendChild(crtAbt); 
    resumeId.appendChild(infoHld);
    resumeId.appendChild(resHld); 

   
}

function codePage() {
    introId.removeChild(intrDiv); 
    aboutId.removeChild(crtAbt);
    resumeId.removeChild(infoHld); 
    resumeId.removeChild(resHld);

}

function portfolioPage() {
    introId.removeChild(intrDiv); 
    aboutId.removeChild(crtAbt);
    resumeId.removeChild(infoHld); 
    resumeId.removeChild(resHld);
}


introId.appendChild(introDiv); 
aboutId.appendChild(crtAbt);
resumeId.appendChild(infoHld);
resumeId.appendChild(resHld);

if(window.innerWidth < 760){
    gearPhoneAbout();
}

if(window.innerWidth > 760){
    gearPadAbout();
}

