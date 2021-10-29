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
import AuthProvider from './context/AuthProvider';
import PrivateForm from './Pages/PrivateRoute/PrivateForm';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateForm exact path="/login">
              <Login></Login>
            </PrivateForm>
            <PrivateForm exact path="/sign-up">
              <SignUp></SignUp>
            </PrivateForm>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
