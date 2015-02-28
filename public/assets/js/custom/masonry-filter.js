$(document).ready(function ($) {

	var $container = $('.masonry').masonry({
		itemSelector: '.masonry__brick',
		columnWidth: 260,
		isFitWidth: true,
		isAnimated: !Modernizr.csstransitions
	});

	var arrThought = new Array($('.category--thoughts'));
	var arrCreative = new Array($('.category--creations'));
	var arrWork = new Array($('.category--portfolio'));

	$('input').click(function () {


		if ($('.thought-filter').is(':checked')) {
			$container.masonry('hide', arrCreative.concat(arrWork));
			$(arrThought).each(function (index, element) {
				element.show();
			});
			$container.masonry();

		} else if ($('.creative-filter').is(':checked')) {
				$container.masonry('hide', arrWork.concat(arrThought));
				$(arrCreative).each(function (index, element) {
					element.show();
				});
				$container.masonry();

		} else if ($('.work-filter').is(':checked')) {
				$container.masonry('hide', arrCreative.concat(arrThought));
				$(arrWork).each(function (index, element) {
					element.show();
				});
				$container.masonry();

		} else if ($('.all').is(':checked')) {
				$(arrThought).each(function (index, element) {
					element.show();
				});
				$(arrCreative).each(function (index, element) {
					element.show();
				});
				$(arrWork).each(function (index, element) {
					element.show();
				});
				$container.masonry();
		}
	});
});
