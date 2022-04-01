import { Fragment } from 'react';
import Header from './Header';
import About from './About';
import Nav from './Nav';
import Hero from './Hero';
import Services from './Services';
import Title from './Title';

const Home = ({ load, precio }) => {	

    return (
        <Fragment>
            <Header>
                <Nav />
                <Hero>
                    <Title 
                        title='Casa de cambios Online'
                        subTitle='Miraflores Lima Perú'
                    />
                </Hero>
                <Services 
                    load={load}
                    compra={precio.compra}
                    venta={precio.venta}
                    compraEur={precio.compraEur}
                    ventaEur={precio.ventaEur}
                />
            </Header>
            <About />
        </Fragment>
    );
}

export default Home;