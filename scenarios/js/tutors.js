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
		var $a = $(this).find('.tutor-profile-link');
		$a.attr('href', FB_PROFILE_URL.replace('<id>', id));
		$a.find('h2').text(getNameFromId(id));
		var $img = $(this).find('img.profile-pic').attr('src', FB_PROFILE_IMG_URL.replace('<id>', id));
	});
}

$(function() {

	$.getJSON('js/tutors.json', function(data) {
		tutors = data;
		console.log(tutors);
		changeNamesAndPictures();
	});

})