$(document).ready(function() {
	$('.dropdown-toggle').click(function () {
		$('div.dropdown').parent().next().toggle();
		$('div #dropdown-menu').toggle();
		// $('div.dropdown').css('width', '60px');
		// $('div.dropdown').css('width', '100% !important');
		// $('div.dropdown').css('height', '140px');
		// $('div.dropdown').css('marigin-bottom', '60px');
		// $('div.dropdown').css('background-color','#43b1fa');
		// $('div.dropdown').css('minwidth', '100%');
		});
});

