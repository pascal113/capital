import React, { useState } from 'react';
import { CommonProvider } from './contexts/common/commonContext';
import { CartProvider } from './contexts/cart/cartContext';
import Header from './components/common/Header';
import RouterRoutes from './routes/RouterRoutes';
import Footer from './components/common/Footer';
import BackTop from './components/common/BackTop';
import { FiltersProvider } from './contexts/filters/filtersContext';


const App = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <>
      <CommonProvider>
        <FiltersProvider>
          <CartProvider>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <RouterRoutes />
            <Footer />
            <BackTop />
          </CartProvider>
        </FiltersProvider>
      </CommonProvider>
    </>
  );
};

export default App;
