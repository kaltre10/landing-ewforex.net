import { useState } from 'react';
import Loader from './Loader';

const Services = ({compra, venta, load}) => {

   	return (
	<div className="service">
		<a href="app">
			<div className="service-card">
				<div className="service-img">
					<img src="images/dolar.png" alt="" />
				</div>
				<p>Intercambio de Dólares en Perú</p>
				<div className="price">
					<div className="compra">
						<p>Compra</p>
						<p id="compra">
							{load ? <Loader /> : compra }
					    </p>
					</div>
					<div className="bar"></div>
					<div className="venta">
						<p>Venta</p>
						<p id="venta">
							{load ? <Loader /> : venta }
						</p>	
					</div>
				</div>	
			</div>
		</a>
		<a href="https://api.whatsapp.com/send?phone=51955269142">
			<div className="service-card" target="_blank">
				<div className="service-img">
					<img src="images/criptos.png" alt="" />
				</div>
				<p>Intercambio de Criptomonedas, bitcoins, ethereum, litecoin y más</p>
			</div>
		</a>
	</div>
   )
}

export default Services;