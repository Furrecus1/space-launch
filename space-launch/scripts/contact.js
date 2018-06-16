// Contact form validation
function check() {
	if (yourName.value === "") {
		document.getElementById("nameError").style.display = "inline-block";
        return false;
	} else {
        document.getElementById("nameError").style.display = "none";
    }
	var regex1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (regex1.test(email.value) === false) {
		document.getElementById("emailError").style.display = "inline-block";
		return false;
	} else {
        document.getElementById("emailError").style.display = "none";
	}
    document.getElementById('myModal').style.display = "block";
    return true;
}
// Message sent, Modal
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
};