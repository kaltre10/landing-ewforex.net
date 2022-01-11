import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Nav = () => {

	const [ burger, setBurget ] = useState(false);
	
	const style = {
		'fontSize': '2em'
	}

	const imagePath = '/images/';
	const imageSrc = 'logo_white';

	const menu = () => burger ? setBurget(false) : setBurget(true);

    return (
        <nav className="nav">
				<div className="logo">
                    <Link to='/'>
                        <img src={`${imagePath}${imageSrc}.png`} alt='ewforex.net' />
                    </Link>
                </div>
				<ul className={`nav-items ${burger ? `nav-items-active` : null }`}>
					<li><a href="/#nosotros">Nosotros
						</a></li>
					<li><a href="blog">Precio del Dólar</a></li>
					<li><span style={style}>😎</span></li>
				</ul>
				<div className={`hamburger ${burger ? `is-active` : null }`}
					onClick={() => menu()}
				>
					<div className="_layer -top"></div>
					<div className="_layer -mid"></div>
					<div className="_layer -bottom"></div>
				</div>
		</nav>
    );
}

export default Nav;