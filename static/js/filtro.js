function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all"){
		c = "";
	}

	for (i = 0; i < x.length; i++) {
		hideOther(x[i], "mostra");
		if (x[i].className.indexOf(c) > -1){
			showFilter(x[i], "mostra");
		}
	}
}

function showFilter(element, name) {
	element.classList.add(name);
}

function hideOther(element, name) {
	element.classList.remove(name)
}