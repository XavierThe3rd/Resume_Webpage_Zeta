window.addEventListener("load",function() {
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 0);
});

var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

var isTouchDevice = function() {  
    return 'ontouchstart' in window || 'onmsgesturechange' in window; 
};
 
var isDesktop = window.screenX != 0 && !isTouchDevice() ? true : false;

/*
window.is_tablet = ((function(a){if(/ipad|android.+\d safari|tablet/i.test(a))
    var iPad = document.getElementsByClassName("debug-ipad");
    for (index = 0; index < iPad.length; index++){
        iPad[index].style.display= "none";
    }
})(navigator.userAgent||navigator.vendor||window.opera))?'true':'false';
*/