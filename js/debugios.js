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