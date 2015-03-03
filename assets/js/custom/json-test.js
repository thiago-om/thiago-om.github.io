function myFunction() {
		$.getJSON('/content.json', function(data) {
				var text = "";
				var i = 0;
				var $portfolio = data.portfolio.items[i];
				while (i < data.portfolio.items.length) {
						text +=
						"<br> Portfolio title: "      + $portfolio.title +
						"<br> Portfolio description: "+ $portfolio.description +
						"<br> Portfolio category: "   + $portfolio.category +
						"<br> Portfolio url: "        + $portfolio._url +
						"<br> Portfolio tags: "       + $portfolio.tags + '<hr>';
						i++;
				}
				document.getElementById("demo").innerHTML = text;
		});
}


$.getJSON('/content.json', function(data) {
		var text = "";
		var i = 0;
		var $portfolio = data.portfolio.items[i];
		while (i < data.portfolio.items.length) {
				text +=
				"<h3> Portfolio "                    + [i+1] + " at key [" + [i] + "]</h3>" +
				"<br> <strong>Title</strong>: "      + $portfolio.title +
				"<br> <strong>Description</strong>: "+ $portfolio.description +
				"<br> <strong>Category</strong>: "   + $portfolio.category +
				"<br> <strong>Url</strong>: "        + $portfolio._url +
				"<br> <strong>Tags</strong>: "       + $portfolio.tags + '<hr>';
				i++;
		}
		document.getElementById("demo2").innerHTML = text;
		document.getElementById("jsonItem").innerHTML = text;
});

$.getJSON('/content.json', function(data) {
		var i = 0;
		var $items = data.posts[i];
		while (i < data.posts.length){
			var text = "";
			var i2 = 0;
			var $posts = data.posts.code.items[i];
			while (i2 < data.posts.code.items.length) {
					text +=
					"<h3> posts "                        + [i2+1] + " at key [" + [i2] + "]</h3>" +
					"<br> <strong>Title</strong>: "      + $posts.title +
					"<br> <strong>Description</strong>: "+ $posts.description +
					"<br> <strong>Category</strong>: "   + $posts.category +
					"<br> <strong>Url</strong>: "        + $posts._url +
					"<br> <strong>Tags</strong>: "       + $posts.tags + '<hr>';
					i2++;
				document.getElementById("demo3").innerHTML = text;
				document.getElementById("jsonItem").innerHTML = text;
			}
			i2++;

		}
});
