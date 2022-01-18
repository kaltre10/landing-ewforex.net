import { Fragment, useState, useLayoutEffect } from 'react';
import Home from './components/Home';
import Libro from './components/Libro';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import Loader from './components/Loader';
import getDataApi from './utils/getDataApi';
import { Helmet } from 'react-helmet';

function App() {

  const API = process.env.REACT_APP_API;
  const [ precio, setPrecio ] = useState({compra: 0,venta: 0});
  const [ load, setLoader ] = useState(true);
  const query = getDataApi(API);

  useLayoutEffect(() => {
    query
      .then(res => {
        setPrecio({
          compra: res[0].com_divisa,
          venta: res[0].ven_divisa,
        });
        if(document.querySelector('.container'))
            document.querySelector('.container').style.display = 'grid';
        setTimeout(() => setLoader(false), 1000);
      })
  }, [load]);	

  return (
    <Fragment>
      <Helmet>‍
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="images/icono.png" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="application-name" content="exforex.net"/>
        <meta name="description" content="Casa de Cambios Online En lima perú, Miraflores, Compra y Venta de Dolares, Cambio de Divisas al Mejor Precio. Mejor precio del dolar en perú, Euros, Pesos chilenos, Pesos Colombianos." />
        <meta name="author" content="Fernando Luna" />
        <meta name="keywords" content="precio del dolar peru,precio del dolar en perú, precio del dolar en perú hoy,precio del dolar, precio del dolar hoy,casa de cambio,cambio de dolares, Tipo de Cambio,compra venta de dolar, compra de dolares, venta de dolares, cotizacion del dolar, soles a dolares, dolares a soles,cambio de dolares, dolar peru" />
        <meta data-n-head="true" content="precio del dolar peru,precio del dolar en perú, precio del dolar en perú hoy,precio del dolar, precio del dolar hoy,casa de cambio,cambio de dolares, Tipo de Cambio,compra venta de dolar, compra de dolares, venta de dolares, cotizacion del dolar, soles a dolares, dolares a soles,cambio de dolares, dolar peru" name="keywords" data-hid="keywords" /> 
        <meta name="robots" content="Index, Follow" /> 
        <meta name="distribution" content="global" /> 
        <meta property="og:type" content="website" /> 
        <meta property="og:url" content="https://ewforex.net/" /> 
        <meta property="og:site_name" content="ewforex.net" /> 
        <meta property="og:description" content="Casa de Cambios Online En lima perú, Miraflores, Compra y Venta de Dolares, Cambio de Divisas al Mejor Precio. Mejor precio del dolar en perú, Euros, Pesos chilenos, Pesos Colombianos." /> 
        <link rel='shortlink' href='https://www.ewforex.net/' /> 
        <link rel="canonical" href="https://www.ewforex.net/" /> 
        <meta property="og:locale" content="es_ES" /> 
        <meta property="og:title" content="Precio del Dolar Perú | Casa Cambio de dolar" />
        <title>Casa de cambios Miraflores | ewforex.net</title>
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Helmet>
      {load && <Loader />}
      {!load &&
        <div className="container">
          <Particles id="particles-js" params={particlesConfig} />
            <Routes>
              <Route path="/" element={<Home load={load} precio={precio} />} />
              <Route path="/libro" element={<Libro setLoader={setLoader} />} />
              <Route path="*" element={<Home load={load} precio={precio} />} />
            </Routes>
            <Footer />
        </div>}
    </Fragment>
  );
}

export default App;
