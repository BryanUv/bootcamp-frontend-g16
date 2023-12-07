import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LayoutBase from "./layouts/LayoutBase";

import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import Character from "./pages/Character";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutBase/>}>
          <Route index element={<Home />} />
          <Route path="/character/:id" element={<Character/>} /> 

          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}