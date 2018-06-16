document.getElementById("hamburger-icon").addEventListener("click", hamburger);


// Hamburger menu
function hamburger() {
	var x = document.getElementById("hamburger-menu");
    var y = document.getElementById("hamburger-icon")
	if (x.style.display === "block") {
		x.style.display = "none";
        y.innerHTML = "&#9776;";
	} else {
		x.style.display = "block";
          y.innerHTML = "&#10006;";
	}
}


// sticky fullscreen menu
window.onscroll = function () {
	stickyMenu();
};

var x = document.getElementById("fullscreen-menu");
var sticky = x.offsetTop;

function stickyMenu() {
	if (window.pageYOffset >= sticky) {
		x.classList.add("sticky");
	} else {
		x.classList.remove("sticky");
	}
}