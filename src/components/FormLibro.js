import { useState } from 'react';
import {
    sendForm,
} from '../utils/validateForm';

const FormLibro = () => {
	const [ inputForm, setInputForm ] = useState({
		nombre: '',
		apellido: '',
		documento: '',
		n_documento: '',
		correo: '',
		tel: '',
		detalle: ''
	})

	const handleChangeInput = e => {
		setInputForm({
			...inputForm,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		sendForm(inputForm);

		// reset state
		setInputForm({
			nombre: '',
			apellido: '',
			documento: '',
			n_documento: '',
			correo: '',
			tel: '',
			detalle: ''
		});

		//reset form
		document.getElementById('form').reset();
	}

	return (
		<div className="wrapper">
			<div className="container-form">
				<div id="App">
					<div className="form">
		    			<h2>Libro de Reclamaciones</h2>
			    		<form id="form" onSubmit={e => handleSubmit(e)}>
			    			<div className="form-row">
			    				<div className="form-control">
									<label>Nombre</label>
									<input id="nombre" type="text" name="nombre" onChange={e => handleChangeInput(e)} />
									<div id="invalid-nombre"></div>
								</div>
			    				<div className="form-control">
									<label>Apellido</label>
									<input id="apellido" type="text" name="apellido" onChange={e => handleChangeInput(e)} />
									<div id="invalid-apellido"></div>
								</div>
							</div>
							<div className="form-row">
								<div className="form-control">
									<label>Tipo de Documento</label>
									<select id="documento" name='documento' onChange={e => handleChangeInput(e)} >
										<option value="">-Seleccion-</option>
										<option value="DNI">DNI</option>
										<option value="CE">CARNET DE EXTRANJERIA</option>
										<option value="PASS">PASAPORTE</option>
									</select>
									<div id="invalid-documento"></div>
								</div>
								<div className="form-control">
									<label>N° de Documento</label>
									<input id="n_documento" type="number" name="n_documento" onChange={e => handleChangeInput(e)} />
									<div id="invalid-n_documento"></div>
								</div>
							</div>
							<div className="form-row">
								<div className="form-control">
									<label>Correo</label>
									<input id="correo" type="email" name="correo" onChange={e => handleChangeInput(e)}  />
									<div id="invalid-correo"></div>
								</div>
								<div className="form-control">
									<label>Telefono</label>
									<input id="tel" type="number" name="tel" onChange={e => handleChangeInput(e)} />
									<div id="invalid-tel"></div>
								</div>
							</div>
							
							<div>
								<label>Detalle del reclamo</label>
								<textarea id="detalle" name="detalle" maxLength="300" onChange={e => handleChangeInput(e)} ></textarea>
								<div id="invalid-detalle"></div>
							</div>
							<div>
								<button id="btn" type="submit">Enviar</button>
							</div>
						</form>
					</div>
				</div>
			</div>
	   </div>  
	)
} 

export default FormLibro;