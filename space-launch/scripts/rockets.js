// slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

fetchRockets();

function fetchRockets() {
	fetch("https://api.spacexdata.com/v2/rockets")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayRockets(res);
		})
		.catch(function (err) {
			s
			console.log(err);
		});
}

function displayRockets(data) {
	var y, x, z, m, n, o, p, q = "";
	x = "<h3>" + data[0].name + "</h3>";
	y = "<h4>" + data[0].name + "</h4>" +
		"<p>" + data[0].description + "</p>";
	z = "<h3>" + data[1].name + "</h3>";
	m = "<h4>" + data[1].name + "</h4>" +
		"<p>" + data[1].description + "</p>";
	n = "<h3>" + data[2].name + "</h3>";
	o = "<h4>" + data[2].name + "</h4>" +
		"<p>" + data[2].description + "</p>";
	p = "<h3>" + data[3].name + "</h3>";
	q = "<h4>" + data[3].name + "</h4>" +
		"<p>" + data[3].description + "</p>";
	document.getElementById("falcon1-head").innerHTML = x;
	document.getElementById("falcon1-info").innerHTML = y;
	document.getElementById("falcon9-head").innerHTML = z;
	document.getElementById("falcon9-info").innerHTML = m;
	document.getElementById("falconheavy-head").innerHTML = n;
	document.getElementById("falconheavy-info").innerHTML = o;
	document.getElementById("bfr-head").innerHTML = p;
	document.getElementById("bfr-info").innerHTML = q;
}