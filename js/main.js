function validateForm(){
	nombre();
	apellido();
}


//validación nombre
function nombre(){
		var nameValue = document.getElementById("name").value;
		if (!(/^[A-Z][a-z]{3,19}$/).test(nameValue)){
		var spancito = document.createElement("span");
		var texto = document.createTextNode("Nombre inválido. Debe incluir letras de la A-Z.");
		var clasePadre = document.getElementsByClassName("name-container input-box")[0];
		spancito.appendChild(texto);
		clasePadre.appendChild(spancito);
		}
	}

	function apellido(){
		var apellidoValue = document.getElementById("lastname").value;
		if (!(/^[A-Z][a-z]{3,19}$/).test(apellidoValue)){
		var spancito = document.createElement("span");
		var texto = document.createTextNode("Apellido inválido. Debe incluir letras de la A-Z.");
		var clasePadre = document.getElementsByClassName("lastname-container input-box")[0];
		spancito.appendChild(texto);
		clasePadre.appendChild(spancito);
		}
	}

	function correo(){
		
	}