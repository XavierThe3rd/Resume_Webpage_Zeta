import {introDiv} from './appends/topbox.js';
import {createAbout} from './appends/midbox.js';
import {infoHolder} from './appends/bottombox.js';
import {resHolder} from './appends/bottombox.js';
import {gearPhoneAbout} from './appends/scrollmagicOut.js';
import {gearPadAbout} from './appends/scrollmagicOut.js';

var crtAbt = createAbout();
var intrDiv= introDiv();
var infoHld = infoHolder();
var resHld = resHolder();

var aboutId = document.getElementById("aboutHolder");
var introId = document.getElementById("introHolder");
var resumeId = document.getElementById("resumeHolder");

//export {crtAbt, intrDiv, infoHld, resHld, aboutId, introId, resumeId};

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

introId.appendChild(intrDiv); 
aboutId.appendChild(crtAbt);
resumeId.appendChild(infoHld);
resumeId.appendChild(resHld);

if(window.innerWidth < 760){
    gearPhoneAbout();
}

if(window.innerWidth > 760){
    gearPadAbout();
}

/*
crtAbt, intrDiv, infoHld, resHld, aboutId, introId, resumeId
onload();
aboutPage();
codePage();
portfolioPage();
*/
//alert("Hnello World!");

//import{ createElementGears } from './gears.js';

//require('/js/appends/gears.js');

//createElementGears(null, null, null, null);

//const arr = [1, 2, 3];
//const iAmJavascriptES6 = () => console.log(...arr);
//window.iAmJavascriptES6 = iAmJavascriptES6;




