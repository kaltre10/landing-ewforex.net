import { Fragment, useState, useLayoutEffect } from 'react';
import Home from './components/Home';
import Libro from './components/Libro';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import Loader from './components/Loader';
import getDataApi from './utils/getDataApi';

function App() {

  const [ precio, setPrecio ] = useState({compra: 0,venta: 0});

  const [ load, setLoader ] = useState(true);

  const query = getDataApi('http://localhost/app/Divisas')
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
