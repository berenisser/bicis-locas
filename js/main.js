function validateForm(){
	nombre();
	apellido();
	correo();
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
		var emailValue = document.getElementById("input-email").value;
		if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(emailValue)){
		var spancito = document.createElement("span");
		var texto = document.createTextNode("Correo inválido. Debe tener formato valido.");
		var clasePadre = document.getElementsByClassName("email-container input-box")[0];
		spancito.appendChild(texto);
		clasePadre.appendChild(spancito);
		}
}

