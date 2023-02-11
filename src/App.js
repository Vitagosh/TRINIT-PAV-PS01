import logo from './logo.svg';
import './App.css';
import Global from './Pages/Global';
import Home from './Pages/Home';
import SigninP from './Pages/SigninP';
import SignupP from './Pages/SignupP';
function App() {
  return (
    <div className="App">
      <SignupP/>
      {/* <SigninP/> */}
      {/* <Global>
        <Home />
      </Global> */}
    </div>
  );
}

export default App;
