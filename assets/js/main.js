$(document).ready(function() {

	// $.getJSON("/content.json", function(json) {
	// 	var myjson = json;
	// 	var related = "";
	// 	var i = 0;
	// 	var $related = myjson.portfolio.items[i];
	// 	while (i < myjson.portfolio.items.length) {
	// 		related +=
	// 			"<h3> Portfolio " + [i] + " at key [" + [i] + "]</h3>" +
	// 			"<br> <strong>Title</strong>: " + $related.title +
	// 			"<br> <strong>Description</strong>: " + $related.description +
	// 			"<br> <strong>Category</strong>: " + $related.category +
	// 			"<br> <strong>Url</strong>: " + $related._url +
	// 			"<br> <strong>Tags</strong>: " + $related.tags + '<hr>';
	// 		i++;
	// 	}
	// 	// console.log(related);
	// 	document.getElementById("json").innerHTML = related;
	// });

	$.getJSON('/portfolio.json', function(data) {
		$.each(data, function() {
			var related = '';
			$.each(this, function(index) {
				related +=
					'<li><a href=' + this._url + '>' +
					'<span"></span>' +
					'<img src=' + this.relatedimageurl + '>' +
					'</a>' +
					'</li>';
				document.getElementById("related").innerHTML = related;
			});
		});
	});

	// $.getJSON('/content.json', function(json) {
	// 	var myjson = json;
	// 	var $related = myjson.portfolio.items[i];
	// 	console.log('begin');
	// 	for (var i = 0; i < myjson.length - 1; i++) {
	// 		var item = myjson[i];
	// 		console.log(item);
	// 	}
	// });


});
