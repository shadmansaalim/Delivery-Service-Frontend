import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/sign-up">
            <SignUp></SignUp>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
