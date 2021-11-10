import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Registration/Registration';
import AuthProvider from './contexts/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <Router >
      <Switch>
        
        {/* <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute> */}
        <Route path="/users">{/* <Users /> */}</Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
