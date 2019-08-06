import {introDiv} from './topbox.js';
import {createAbout} from './midbox.js';
import {infoHolder} from './bottombox.js';
import {resHolder} from './bottombox.js';

var crtAbt = createAbout();
var intrDiv= introDiv();
var infoHld = infoHolder();
var resHld = resHolder();

var aboutId = document.getElementById("aboutHolder");
var introId = document.getElementById("introHolder");
var resumeId = document.getElementById("resumeHolder");

export {crtAbt, intrDiv, infoHld, resHld, aboutId, introId, resumeId};


    export function aboutPage() {
        introId.appendChild(intrDiv);
        aboutId.appendChild(crtAbt); 
        resumeId.appendChild(infoHld);
        resumeId.appendChild(resHld);    
    };

    export function codePage() {
        introId.removeChild(intrDiv); 
        aboutId.removeChild(crtAbt);
        resumeId.removeChild(infoHld); 
        resumeId.removeChild(resHld);
    };


export function portfolioPage() {
    introId.removeChild(intrDiv); 
    aboutId.removeChild(crtAbt);
    resumeId.removeChild(infoHld); 
    resumeId.removeChild(resHld);
}



