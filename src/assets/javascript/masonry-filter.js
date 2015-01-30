$(document).ready(function ($) {

  var $container = $('.grid').masonry({
    columnWidth: 280,
    itemSelector: '.item',
    isFitWidth: true
  });

  var arrThought = new Array($('.thought'));
  var arrCreative = new Array($('.creative'));
  var arrWork = new Array($('.work'));

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
