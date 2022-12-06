function t1(){
	if (document.getElementById("card1").style.display == "none"){
		document.getElementById("card1").style.display = "block";
		document.getElementById("card2").style.display = "none";
		
		document.getElementById("at1").classList.add("active");
		document.getElementById("at2").classList.remove("active");			
	}
}
function t2(){
	if (document.getElementById("card2").style.display == "none"){
		document.getElementById("card2").style.display = "block";
		document.getElementById("card1").style.display = "none";
		
		document.getElementById("at2").classList.add("active");
		document.getElementById("at1").classList.remove("active");	
	}
}

function setFormMultipart() {
	document.getElementById("formRicerca").setAttribute("enctype", "multipart/form-data");
}

function removeFormMultipart() {
	document.getElementById("formRicerca").removeAttribute("enctype");
}

function previewImmagine(event){
	var reader = new FileReader();

 	reader.onload = function(){
  		var output = document.getElementById('preview');
  		output.src = reader.result;
 	}
	reader.readAsDataURL(event.target.files[0]);
}

function getUtenteFromSelect(){
	var tesseraUtente = $("#userSelect option:selected").text();
}

function updateCreation(){
	for (let i = 1; i < 11; i++) {
		
		document.getElementById("create"+i).innerHTML = document.getElementById("createInput"+i).value;
	}
}


function disableCreation(){
	for (let i = 1; i < 11; i++) {
		document.getElementById("createInput"+i).setAttribute("disabled", "");
		document.getElementById("createInput"+i).removeAttribute("required", "");

		document.getElementById("delLibroId").setAttribute("required","")
		document.getElementById("delLibroId").removeAttribute("disabled","")

	}
}
function enableCreation(){
	for (let i = 1; i < 11; i++) {
		document.getElementById("delLibroId").setAttribute("disabled", "");
		document.getElementById("delLibroId").removeAttribute("required");

		document.getElementById("createInput"+i).setAttribute("required", "");
		document.getElementById("createInput"+i).removeAttribute("disabled", "");

	}
}

function contolloPrestiti(){
	for (let i = 1; i < 11; i++) {
		document.getElementById("createInput"+i).removeAttribute("disabled");
		document.getElementById("createInput"+i).setAttribute("required", "");
	}
}

function copertina(){
	document.getElementById("file").setAttribute("required", "");
	document.getElementById("file").removeAttribute("disabled", "");
}

function noCopertina(){
	document.getElementById("file").removeAttribute("required", "");
	document.getElementById("file").setAttribute("disabled", "");
}