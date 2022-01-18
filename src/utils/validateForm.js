import Swal from 'sweetalert';

async function sendForm(data){

	let { nombre, apellido, documento, n_documento, correo, tel, detalle } = data;
	validateInputEmpty(data);
	
	if(!document.getElementById('nombre').classList.contains('input-error') &&
	!document.getElementById('apellido').classList.contains('input-error') &&
	!document.getElementById('documento').classList.contains('input-error') &&
	!document.getElementById('n_documento').classList.contains('input-error') &&
	!document.getElementById('correo').classList.contains('input-error') &&
	!document.getElementById('tel').classList.contains('input-error') &&
	!document.getElementById('detalle').classList.contains('input-error')){

		let values = { 
            nombre: nombre, 
            apellido: apellido, 
            documento: documento, 
            n_documento: n_documento, 
            correo: correo, 
            tel: tel, 
            detalle: detalle
        }

		let query = await send(values);

		Swal({
		  position: 'top-end',
		  icon: 'success',
		  title: 'Enviado Correctamente',
		  showConfirmButton: false,
		  timer: 3000
		});

	}else{
		return;
	}
	
}

function addInputError(mensaje, etiqueta){
    let $input = document.getElementById(etiqueta);
    let invalid = document.getElementById(`invalid-${etiqueta}`);
    $input.setAttribute('class','input-error');
    invalid.setAttribute('class','invalid');
    invalid.textContent = mensaje;
}

function removeInputError(etiqueta){
    let $divError = document.getElementById(`invalid-${etiqueta}`);
    let $input = document.getElementById(etiqueta);
    if($divError){
    	$input.classList.remove('input-error');
    	$divError.textContent = "";
    	$divError.classList.remove(`invalid-${etiqueta}`);  
    }
}


function validateInputEmpty({ nombre, apellido, documento, n_documento, correo, tel, detalle }){
	
	nombre.trim() === "" 
		? addInputError("Ingrese el Nombre", "nombre") 
		: removeInputError("nombre")

	apellido.trim() === ""
		? addInputError("Ingrese el Apellido", "apellido")
		: removeInputError("apellido")

	documento.trim() === ""
		? addInputError("Ingrese el tipo de documento", "documento")
		: removeInputError("documento")

	n_documento.trim() === ""
		? addInputError("Ingrese el numero de documento", "n_documento")
		: removeInputError("n_documento")

	correo.trim() === ""
		? addInputError("Ingrese el correo", "correo")
		: removeInputError("correo")

	tel.trim() === ""
		? addInputError("Ingrese el teléfono", "tel")
		: removeInputError("tel")

	detalle.trim() === ""
		? addInputError("Ingrese el detalle", "detalle")
		: removeInputError("detalle")

	//verificamos el correo
	if(correo.trim() !== ""){
		valueEmail(correo);
	}

}

function valueEmail(correo){
	let ExpReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!ExpReg.test(correo)){
    	addInputError("Correo Invalido", "correo")
    }
}

function send(values){
	return fetch(process.env.REACT_APP_EMAIL,{
				method: 'POST',
				// headers: {
			  	// 			'content-type': 'application/json'
			  	// 		},
				body: JSON.stringify(values)
			})
			.catch(error => console.error('ha ocurrido un error al enviar formulario'))
}

export {
    sendForm,
}