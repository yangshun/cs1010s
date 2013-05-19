var tutors;
var FB_PROFILE_IMG_URL = 'https://graph.facebook.com/<id>/picture?width=160&height=160';
var FB_PROFILE_URL = 'https://www.facebook.com/<id>/'

function getNameFromId(id) {
	for (var i = 0; i < tutors.length; i++) {
		if (id == tutors[i].id) {
			return tutors[i].name;
		}
	}
}

function changeNamesAndPictures() {

	$('#sidebar-nav').children("li").each(function() {
		var $a = $(this).children("a");
		$a.html(getNameFromId($a.attr('id')));
	});
	$('#scenarios').children('.tutor-section').each(function() {
		var id = $(this).attr('data-target');
		var $a = $('<a></a>').attr('href', FB_PROFILE_URL.replace('<id>', id)).attr('target', '_blank').html(getNameFromId(id));
		$(this).children('h2').html($a);
		var $img = $('<img/>').addClass('profile-pic').attr('src', FB_PROFILE_IMG_URL.replace('<id>', id));
		$(this).prepend($img);
	});
}

$(function() {

	$.getJSON('js/tutors.json', function(data) {
		tutors = data;
		console.log(tutors);
		changeNamesAndPictures();
	});

})