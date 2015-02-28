console.log('hey there');
function myFunction() {
		$.getJSON('/content.json', function(data) {
				var text = "";
				var i = 0;
				while (i < data.portfolio.items.length) {
						text +=
						"<br> Portfolio title: "      + data.portfolio.items[i].title +
						"<br> Portfolio description: "+ data.portfolio.items[i].description +
						"<br> Portfolio category: "   + data.portfolio.items[i].category +
						"<br> Portfolio url: "        + data.portfolio.items[i]._url +
						"<br> Portfolio tags: "       + data.portfolio.items[i].tags + '<hr>';
						i++;
				}
				document.getElementById("demo").innerHTML = text;
		});
}


$.getJSON('/content.json', function(data) {
		var text = "";
		var i = 0;
		while (i < data.portfolio.items.length) {
				text +=
				"<h3> Portfolio "                    + [i+1] + " at key [" + [i] + "]</h3>" +
				"<br> <strong>Title</strong>: "      + data.portfolio.items[i].title +
				"<br> <strong>Description</strong>: "+ data.portfolio.items[i].description +
				"<br> <strong>Category</strong>: "   + data.portfolio.items[i].category +
				"<br> <strong>Url</strong>: "        + data.portfolio.items[i]._url +
				"<br> <strong>Tags</strong>: "       + data.portfolio.items[i].tags + '<hr>';
				i++;
		}
		document.getElementById("demo2").innerHTML = text;
});
