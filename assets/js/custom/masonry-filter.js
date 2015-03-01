$(document).ready(function ($) {

	var $container = $('.masonry').masonry({
		itemSelector: '.masonry__brick',
		columnWidth: 260,
		isFitWidth: true,
		isAnimated: !Modernizr.csstransitions
	});

	var arrThought = new Array($('.category--thoughts'));
	var arrCreative = new Array($('.category--creations'));
	var arrPortfolio = new Array($('.category--portfolio'));

	$('input').click(function () {


		if ($('.thought-filter').is(':checked')) {
			$container.masonry('hide', arrCreative.concat(arrPortfolio));
			$(arrThought).each(function (index, element) {
				element.show();
			});
			$container.masonry();

		} else if ($('.creative-filter').is(':checked')) {
				$container.masonry('hide', arrPortfolio.concat(arrThought));
				$(arrCreative).each(function (index, element) {
					element.show();
				});
				$container.masonry();

		} else if ($('.portfolio-filter').is(':checked')) {
				$container.masonry('hide', arrCreative.concat(arrThought));
				$(arrPortfolio).each(function (index, element) {
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
				$(arrPortfolio).each(function (index, element) {
					element.show();
				});
				$container.masonry();
		}
	});
});
