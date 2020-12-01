var check = document.getElementsByClassName("check");
var elem = document.getElementsByClassName("wrapper");

function switchMode() {
	if (check[0].checked) {
		elem[0].classList.remove("light");
		elem[0].classList.add("dark");
	}
	else {
		elem[0].classList.remove("dark");
		elem[0].classList.add("light");
	}
}