// Gumby is ready to go
Gumby.ready(function() {

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}
	Gumby.initialize('skiplinks');
});

// Oldie document loaded
Gumby.oldie(function() {
	console.log("This is an oldie browser...");
});

Gumby.touch(function() {
	console.log("This is a touch enabled device...");
});

// Document ready
$(function() {
 	Gumby.initialize('skiplinks');
});

