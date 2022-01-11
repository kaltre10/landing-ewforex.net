import { Link } from "react-router-dom";

const background = `/images/footer.webp`;

const styleBackground = {
	gridArea: 'footer',
	backgroundImage: `url(${background})`,
	backgroundSize: 'cover',
	height: '500px',
	backgroundPosition: 'center'
}


const Footer = () => {

	return(
			<div style={ styleBackground } className="footer-over">
				<div className="footer">
					<div className="container-card">
						<div className="footer-card">
							<div className="logo"><a href="!#">
								<img src="images/logo_white.png" alt="logo ewforex.net" />
								</a></div>
							<p><i className="fas fa-id-card-alt"></i> RUC: 10064782261</p>
							<p><i className="fab fa-whatsapp"></i> 955 269 142</p>
							<p><i className="fas fa-phone"></i> 01 389 5829</p>
						</div>
						<div className="footer-card">
							<h2>Horario de Atención</h2>
							<p>Lunes a Viernes <span>9:00am - 6:00pm</span></p>
							<p>Sábados <span>9:00am - 1:00pm</span></p>
						</div>
						<div className="footer-card">
							<h2>Recursos</h2>
							
							<p><a href="terminos.pdf" target="_blank">Términos y condiciones</a></p>
							<p><a href="politicas.pdf" target="_blank">Política de Privacidad</a></p>
							<p><Link to='/Libro'>Libro de Reclamaciones</Link></p>
						</div>
					</div>
					<p>© 2021 ewforex.net | Todos los derechos reservados.</p>
				</div>
			</div>
	)
}
export default Footer;