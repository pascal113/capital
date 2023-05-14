import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import MenuPage from "./pages/menu/MenuPage";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.isAdmin);
  //const admin = true;
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/admin/">
                <Home />
              </Route>
              <Route path="/admin/menus">
                <MenuPage />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
