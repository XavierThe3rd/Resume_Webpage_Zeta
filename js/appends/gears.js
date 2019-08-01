
export function createElementGears(className, debug, id, data){
    var a = document.createElement("object");
    a.classList.add(className, debug, "abs", "z1");
    a.setAttribute("id", id);
    a.setAttribute("data", data);
    a.setAttribute("type", "image/svg+xml");
    return a;
}


/*
var gearQ1 = createElementGears("gear-quarter1", "debug-ipad", "gearQ1", "./images/GearQuarterWire.svg");
var gearW = createElementGears("gear-whole", "debug-ipad", "gearWhole", "./images/GearWholeWire.svg");
var gearQ2 = createElementGears("gear-quarter2", "debug-ipad", "gearQ2", "./images/GearQuarterWire.svg");
var gearHR = createElementGears("gear-half-right", "debug-ipad", "gearHalfRight", "./images/GearHalfWire.svg");
var gearHL = createElementGears("gear-half-left", "debug-ipad", "gearHalfLeft", "./images/GearHalfWire.svg");
var gearHB = createElementGears("gear-half-bottom", "debug-ipad", "gearHalfBottom", "./images/GearHalfWire.svg");
var gearQ3 = createElementGears("gear-quarter3", "debug-ipad", "gearQ3", "./images/GearQuarterWire.svg");
var Logo = createElementGears("logo-prime", null, "logoObject", "./images/DragonLogoBeta.svg");
var gearMW = createElementGears("gearmid-whole", "debug-ipad", "gearmidWhole", "./images/GearWholeWire.svg");
var gearWW = createElementGears("gear-whole-w", "debug-ipad", "gearWW", "./images/GearWholeWire.svg");
var gearWX = createElementGears("gear-whole-x", "debug-ipad", "gearWX", "./images/GearWholeWire.svg");
var gearWY = createElementGears("gear-whole-y", "debug-ipad", "gearWY", "./images/GearWholeWire.svg");
var gearWZ = createElementGears("gear-whole-z", "debug-ipad", "gearWZ", "./images/GearWholeWire.svg");
var gearQV = createElementGears("gear-quarter-v", "debug-ipad", "gearQV", "./images/GearQuarterWire.svg");
var gearQW = createElementGears("gear-quarter-w", "debug-ipad", "gearQW", "./images/GearQuarterWire.svg");
var gearQX = createElementGears("gear-quarter-x", "debug-ipad", "gearQX", "./images/GearQuarterWire.svg");
var gearQY = createElementGears("gear-quarter-y", "debug-ipad", "gearQY", "./images/GearQuarterWire.svg");
var gearQZ = createElementGears("gear-quarter-z", "debug-ipad", "gearQZ", "./images/GearQuarterWire.svg");
var gearHV = createElementGears("gear-half-v", "debug-ipad", "gearHV", "./images/GearHalfWire.svg");
var gearHW = createElementGears("gear-half-w", "debug-ipad", "gearHW", "./images/GearHalfWire.svg");
var gearHX = createElementGears("gear-half-x", "debug-ipad", "gearHX", "./images/GearHalfWire.svg");
var gearHY = createElementGears("gear-half-y", "debug-ipad", "gearHY", "./images/GearHalfWire.svg");
var gearHZ = createElementGears("gear-half-z", "debug-ipad", "gearHZ", "./images/GearHalfWire.svg");
var gearH1res = createElementGears("gear-half1", "debug-ipad", "gearHalf1", "./images/GearHalfWire.svg");
var gearQ1res = createElementGears("gear-quarter1res", "debug-ipad", "gearQ1res", "./images/GearQuarterWire.svg");
var gearQ2res = createElementGears("gear-quarter2res", "debug-ipad", "gearQ2res", "./images/GearQuarterWire.svg");
var gearH2res = createElementGears("gear-half2", "debug-ipad", "gearHalf2", "./images/GearHalfWire.svg");
var gearQ3res = createElementGears("gear-quarter3res", "debug-ipad", "gearQ3res", "./images/GearQuarterWire.svg");
var gearH3res = createElementGears("gear-half3", "debug-ipad", "gearHalf3", "./images/GearHalfWire.svg");
*/
