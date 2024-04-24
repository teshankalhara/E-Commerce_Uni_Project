import { useState } from "react";
import "./App.css";
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <ToastContainer />
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
