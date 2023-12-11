import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Interface from "./components/Interface";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SignupForm from "./components/SignupForm";
import Signnav from "./components/Signnav";

function App() {
  return (
    <div>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Interface/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/signnav' element={<Signnav />}></Route>
      <Route path='/register' element={<SignUp />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
