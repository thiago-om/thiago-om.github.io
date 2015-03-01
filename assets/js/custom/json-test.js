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
