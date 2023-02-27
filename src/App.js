import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Activate from "./components/Activate";
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from "./components/ResetPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='register/' element={<Register />}/>
          <Route path='home/' element={<Home />}/>
          <Route exact path='activate/:id/:token/' element={<Activate />}/>
          <Route  path='forgot/' element={<ForgotPassword />}/>
          <Route path='password/reset/confirm/:id/:token/' element={<ResetPassword/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
