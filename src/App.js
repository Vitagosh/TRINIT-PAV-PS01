import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link,Routes } from "react-router-dom";
import Global from './Pages/Global';
import Home from './Pages/Home';
import SigninP from './Pages/SigninP';
import SignupP from './Pages/SignupP';
import { ReactDOM } from 'react';
//import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route exect path="/" element={<Home/>}>
          </Route>
          <Route exect path="/signup" element={<SignupP/>}>
          </Route>
          <Route exect path="/signin" element={<SigninP/>}>
          </Route>
        </Routes>
        </Router>

      {/* </Router>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <SigninP />
          </Route>
          <Router>
          <Route path="/signup">
            <SignupP />
          </Route> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
