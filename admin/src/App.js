
import "./App.css";
//import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { CommonProvider } from './contexts/common/commonContext';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import AuthRoute from "./components/authroute/AuthRoute";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import MenuPage from "./pages/menu/MenuPage";
import Job from "./pages/job/Job";


function App() {
  //const admin = useSelector((state) => state.user.isAdmin);
  const history = useHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <>
          <CommonProvider>
            <Topbar />
            <div className="container">
              <Sidebar />
              <AuthRoute exact path="/admin/" component={Home} />
              <AuthRoute path="/admin/menus" component={MenuPage} />
              <AuthRoute path="/admin/jobs" component={Job} />
            </div>
          </CommonProvider>
        </>
      </Switch>
    </Router>
  );
}

export default App;
