import { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import SummaryApi from "./api";


function App() {
  const fetchUserDetails=async()=>{
    const dataResponse=await fetch(SummaryApi.current_user,{
      method:SummaryApi.current_user.method,
      credentials:"include"
    })
  }
  useEffect(()=>{

  },[])

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
