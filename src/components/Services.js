import { useState } from 'react';
import Loader from './Loader';

const Services = ({compra, venta, compraEur, ventaEur, load}) => {

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
						<div>
							<p id="compra">
								{load ? <Loader /> : <span>USD {compra}</span> }
							</p>
							<p id="compra-eur">
								{load ? <Loader /> : <span>EUR {compraEur}</span> }
							</p>
						</div>
						
					</div>
					<div className="bar"></div>
					<div className="venta">
						<p>Venta</p>
						<div>
							<p id="venta">
								{load ? <Loader /> : <span>USD {venta}</span> }
							</p>
							<p id="venta-eur">
								{load ? <Loader /> : <span>EUR {ventaEur}</span> }
							</p>
						</div>
							
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