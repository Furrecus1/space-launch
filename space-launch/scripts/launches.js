fetchLatestLaunches();

function fetchLatestLaunches() {
	fetch("https://api.spacexdata.com/v2/launches/latest")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayLatestLaunches(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}

function displayLatestLaunches(data) {
	var x = '';
	x = '<h4>' + data.mission_name + '</h4>' +
		'<p>' + data.rocket.rocket_name + '</p>' +
		'<a href=' + data.links.video_link + '>View Launch Video' + '</a>' +
		'<a href=' + data.links.article_link + '>Learn More' + '</a>';
	document.getElementById('latest-launch').innerHTML = x;
}

fetchUpcomingLaunches();

function fetchUpcomingLaunches() {
	fetch("https://api.spacexdata.com/v2/launches/upcoming")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayUpcomingLaunches(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function displayUpcomingLaunches(data) {
	var i, x = '';
	for (i in data) {
		var y = data[i].launch_date_unix;
		var a = new Date(y * 1000);
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
        var hour = addZero(a.getHours());
        var second = addZero(a.getSeconds());
		var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + second;
		x += '<div id="upcoming-launch-div">' +
			'<div id="time">' + time + '</div>' +
			'<p><b>Mission: </b>' + data[i].mission_name + '</p>' +
			'<p><b>Rocket: </b>' + data[i].rocket.rocket_name + '</p>' +
			'</div>';
	}
	document.getElementById('upcoming-launches').innerHTML = x;
}


fetchPreLaunches();

function fetchPreLaunches() {
	fetch("https://api.spacexdata.com/v2/launches")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayPreLaunches(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}

function displayPreLaunches(data) {
	var i, x = '';
	data.reverse();
	for (i in data) {
		var y = data[i].launch_date_unix;
		var a = new Date(y * 1000);
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var time = date + ' ' + month + ' ' + year;
		x += '<div class="pre-launch-div">' +
			'<h4> ' + data[i].mission_name + '</h4>' +
			'<img src="' + data[i].links.mission_patch_small + '">' +
			'<p><b>Rocket:</b> ' + data[i].rocket.rocket_name + '</p>' +
			'<p><b>Launch date:</b> ' + time + '</p>' +
			'<a href=' + data[i].links.video_link + '>View Launch' + '</a>' +
			'<a href=' + data[i].links.article_link + '>Learn More' + '</a>' +
			'</div>';
	}
	document.getElementById('previous-launch').innerHTML = x;
}

function preLaunchesSearch() {
	var input, filter, x, y, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	x = document.getElementsByClassName("pre-launch-div");
	for (i in x) {
		y = x[i].getElementsByTagName("h4")[0];
		if (y.innerHTML.toUpperCase().indexOf(filter) > -1) {
			x[i].style.display = "";
		} else {
			x[i].style.display = "none";

		}
	}

}