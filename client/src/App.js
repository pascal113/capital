import React, {useState, useEffect} from 'react';
import { CommonProvider } from './contexts/common/commonContext';
import { MenuProvider } from './contexts/menu/menuContext';
import Header from './components/common/Header';
import RouterRoutes from './routes/RouterRoutes';
import Footer from './components/common/Footer';
import BackTop from './components/common/BackTop';
import muiTheme from './components/theme/MuiTheme';
import { ThemeProvider} from "@mui/material";
import Preloader from './components/common/Preloader';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setLoading(false);
        });
    }, 2000);*/
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
    <>
      {loading === true ? (<Preloader />) :(
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
      )}
    </>
  );
};

export default App;
