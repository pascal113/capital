
import "./App.css";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import MenuPage from "./pages/menu/MenuPage";
import Job from "./pages/job/Job";


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
              <Route path="/admin/jobs">
                <Job />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
