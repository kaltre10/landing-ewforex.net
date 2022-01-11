import { Fragment } from 'react';
import Header from './Header';
import Nav from './Nav';
import Hero from './Hero';
import Title from './Title';
import FormLibro from './FormLibro';

const Libro = ({setLoader}) => {

    //change page Libro scroll top 0
    window.scroll({top:0});
    setLoader(true);
    setLoader(false);

    return (
        <Fragment>
            <Header>
                <Nav />
                <Hero>
                    <Title 
                        title="Libro de Reclamaciones"
                        p='A continuación por favor ingrese el reclamo o queja en el siguiente formulario:'
                    />
                </Hero>
            </Header>
            <FormLibro />
        </Fragment>
    );
}

export default Libro;