$(document).ready(function() {
	filterSelection("all");


	$('.btn2').click(function() {
		$(".btn2").removeClass("active focus");
	   	$(this).toggleClass('active');
	});

	$('.btn3').click(function() {
		$(".btn3").removeClass("active focus");
	   	$(this).toggleClass('active');
	});

});

/* carta singola
function resize(id) {
	element = document.getElementById('card-'+id);
	element.classList.add('card_expanded');
}

function unresize(id) {
	element = document.getElementById('card-'+id);
	element.classList.remove('card_expanded');
}
*/

function resize_all(name) {
	element = document.getElementsByClassName(name);

	for (i = 0; i < element.length; i++) {
		element[i].classList.add('card_expanded');
	}
}

function unresize_all(name) {
	element = document.getElementsByClassName(name);

	for (i = 0; i < element.length; i++) {
		element[i].classList.remove('card_expanded');
	}
}

