fetchUpcomingDate();

function fetchUpcomingDate() {
	fetch("https://api.spacexdata.com/v2/launches/upcoming")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayDate(res);
			displayNextLaunch(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}

function displayDate(data) {
	var countDownDate = new Date(data[0].launch_date_utc).getTime();
	var x = setInterval(function () {
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		document.getElementById("launch-countdown").innerHTML =
			"<div>" + "<p>" + days + "</p>" + "<br>" + "Days" + "</div>" +
			"<div>" + "<p>" + hours + "</p>" + "<br>" + "Hours" + "</div>" +
			"<div>" + "<p>" + minutes + "</p>" + "<br>" + "Minutes" + "</div>" +
			"<div>" + "<p>" + seconds + "</p>" + "<br>" + "Seconds" + "</div>";
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("launch-countdown").innerHTML = "EXPIRED";
		}
	}, 1000);
}

function displayNextLaunch(data) {
	var x = "";
	x = "<p>" + data[0].mission_name + "</p>" +
		"<p>" + data[0].rocket.rocket_name + "</p>";
	document.getElementById("next-mission").innerHTML = x;

}