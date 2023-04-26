import React from 'react';
import { CommonProvider } from './contexts/common/commonContext';
import { MenuProvider } from './contexts/menu/menuContext';
import Header from './components/common/Header';
import RouterRoutes from './routes/RouterRoutes';
import Footer from './components/common/Footer';
import BackTop from './components/common/BackTop';
import muiTheme from './components/theme/MuiTheme';
import { ThemeProvider} from "@material-ui/core";

const App = () => {

  return (
    <>
      <CommonProvider>
        <Header />
        <MenuProvider>
          <ThemeProvider theme={muiTheme}>
            <RouterRoutes />
          </ThemeProvider>
        </MenuProvider>
        <Footer />
        <BackTop />
      </CommonProvider>
    </>
  );
};

export default App;
