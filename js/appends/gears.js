function createElementGears(className, id, data){
    var a = document.createElement("object");
    a.classList.add(className, "abs", "z1");
    a.setAttribute("id", id);
    a.setAttribute("data", data);
    a.setAttribute("type", "image/svg+xml");
    return a;
}

var gearQ1 = createElementGears("gear-quarter1", "gearQ1", "./images/GearQuarterWire.svg");
var gearW = createElementGears("gear-whole", "gearWhole", "./images/GearWholeWire.svg");
var gearQ2 = createElementGears("gear-quarter2", "gearQ2", "./images/GearQuarterWire.svg");
var gearHR = createElementGears("gear-half-right", "gearHalfRight", "./images/GearHalfWire.svg");
var gearHL = createElementGears("gear-half-left", "gearHalfLeft", "./images/GearHalfWire.svg");
var gearHB = createElementGears("gear-half-bottom", "gearHalfBottom", "./images/GearHalfWire.svg");
var gearQ3 = createElementGears("gear-quarter3", "gearQ3", "./images/GearQuarterWire.svg");
var Logo = createElementGears("logo-prime", "logoObject", "./images/DragonLogoBeta.svg");
var gearMW = createElementGears("gearmid-whole", "gearmidWhole", "./images/GearWholeWire.svg");
var gearWW = createElementGears("gear-whole-w", "gearWW", "./images/GearWholeWire.svg");
var gearWX = createElementGears("gear-whole-x", "gearWX", "./images/GearWholeWire.svg");
var gearWY = createElementGears("gear-whole-y", "gearWY", "./images/GearWholeWire.svg");
var gearWZ = createElementGears("gear-whole-z", "gearWZ", "./images/GearWholeWire.svg");
var gearQV = createElementGears("gear-quarter-v", "gearQV", "./images/GearQuarterWire.svg");
var gearQW = createElementGears("gear-quarter-w", "gearQW", "./images/GearQuarterWire.svg");
var gearQX = createElementGears("gear-quarter-x", "gearQX", "./images/GearQuarterWire.svg");
var gearQY = createElementGears("gear-quarter-y", "gearQY", "./images/GearQuarterWire.svg");
var gearQZ = createElementGears("gear-quarter-z", "gearQZ", "./images/GearQuarterWire.svg");
var gearHV = createElementGears("gear-half-v", "gearHV", "./images/GearHalfWire.svg");
var gearHW = createElementGears("gear-half-w", "gearHW", "./images/GearHalfWire.svg");
var gearHX = createElementGears("gear-half-x", "gearHX", "./images/GearHalfWire.svg");
var gearHY = createElementGears("gear-half-y", "gearHY", "./images/GearHalfWire.svg");
var gearHZ = createElementGears("gear-half-z", "gearHZ", "./images/GearHalfWire.svg");
var gearH1res = createElementGears("gear-half1", "gearHalf1", "./images/GearHalfWire.svg");
var gearQ1res = createElementGears("gear-quarter1res", "gearQ1res", "./images/GearQuarterWire.svg");
var gearQ2res = createElementGears("gear-quarter2res", "gearQ2res", "./images/GearQuarterWire.svg");
var gearH2res = createElementGears("gear-half2", "gearHalf2", "./images/GearHalfWire.svg");
var gearQ3res = createElementGears("gear-quarter3res", "gearQ3res", "./images/GearQuarterWire.svg");
var gearH3res = createElementGears("gear-half3", "gearHalf3", "./images/GearHalfWire.svg");
