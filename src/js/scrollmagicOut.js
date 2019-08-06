import {introPhaze} from './scrollmagicIn.js';
import {gearRotation} from './scrollmagicIn.js';

export function gearPhoneAbout(){
    introPhaze("#resumePhaze", "#spec4", "200%"), 
    gearRotation("#gearWhole", "90", "#introHolder"), 
    gearRotation("#gearQ1", "-320", "#introHolder"), 
    gearRotation("#gearQ2", "-320", "#introHolder"), 
    gearRotation("#gearQ3", "390", "#introHolder"), 
    gearRotation("#gearHalfLeft", "-170", "body"), 
    gearRotation("#gearHalfRight", "180", "body"), 
    gearRotation("#gearHalfBottom", "-180", "body"), 
    gearRotation("#gearWW", "-84", "#aboutPhaze", "300%"), 
    gearRotation("#gearWX", "-90", "#p-aboutPhaze", "300%"), 
    gearRotation("#gearWY", "-90", "#infoH4-trig", "300%"), 
    gearRotation("#gearWZ", "-90", "#spec2", "200%"), 
    gearRotation("#gearHV", "180", "#aboutPhaze", "300%"), 
    gearRotation("#gearHW", "180", "#aboutPhaze", "300%"), 
    gearRotation("#gearHX", "180", "#resumeHolder", "300%"),
    gearRotation("#gearHY", "180", "#spec2", "300%"), 
    gearRotation("#gearHZ", "180", "#spec2", "300%"), 
    gearRotation("#gearQV", "400", "#p-aboutPhaze", "300%"), 
    gearRotation("#gearQW", "-325", "#resumeHolder", "300%"), 
    gearRotation("#gearQX", "395", "#spec2", "300%"), 
    gearRotation("#gearQY", "-347", "#spec2", "200%"), 
    gearRotation("#gearQZ", "-312", "#spec2", "200%"), 
    gearRotation("#gearmidWhole", "-90", "#spec4"), 
    gearRotation("#gearQ1res", "374", "#spec4"), 
    gearRotation("#gearQ2res", "360", "#spec4"), 
    gearRotation("#gearQ3res", "-320", "#spec4"),
    gearRotation("#gearHalf1", "-180", "#spec4"), 
    gearRotation("#gearHalf2", "180", "#spec4"), 
    gearRotation("#gearHalf3", "180", "#spec4"), 
    gearRotation("#gearFW", "90", "#spec4")
}

export function gearPadAbout(){
    introPhaze("#resumePhaze", "#spec4", "200%"), 
    gearRotation("#gearWhole", "90", "#introHolder"), 
    gearRotation("#gearQ1", "-320", "#introHolder"), 
    gearRotation("#gearQ2", "-320", "#introHolder"), 
    gearRotation("#gearQ3", "390", "#introHolder"), 
    gearRotation("#gearHalfLeft", "-170", "body"), 
    gearRotation("#gearHalfRight", "180", "body"), 
    gearRotation("#gearHalfBottom", "-180", "body"), 
    gearRotation("#gearWY", "-90", "#aboutPhaze"), 
    gearRotation("#gearHW", "180", "#aboutHolder"), 
    gearRotation("#gearHX", "180", "#aboutHolder"),
    gearRotation("#gearHY", "178", "#p-aboutPhaze"), 
    gearRotation("#gearHZ", "180", "#resHPhaze"), 
    gearRotation("#gearQV", "-345", "#aboutHolder"), 
    gearRotation("#gearQW", "-325", "#p-aboutPhaze"), 
    gearRotation("#gearQX", "-325", "#spec2"), 
    gearRotation("#gearQY", "-347", "#resHPhaze"), 
    gearRotation("#gearQZ", "-312", "#resHPhaze"), 
    gearRotation("#gearmidWhole", "-90", "#spec2"), 
    gearRotation("#gearQ1res", "374", "#spec2"), 
    gearRotation("#gearQ2res", "360", "#spec2"), 
    gearRotation("#gearQ3res", "-320", "#spec2"),
    gearRotation("#gearHalf1", "-180", "#spec2"), 
    gearRotation("#gearHalf2", "180", "#spec2"), 
    gearRotation("#gearHalf3", "180", "#spec2"), 
    gearRotation("#gearFW", "90", "#spec2")
}