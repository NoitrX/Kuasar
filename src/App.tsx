import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Country from "./pages/Country/Country";
import Login from "./pages/Auth/Login";
import CheckAuth from "./middleware/CheckAuth";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<CheckAuth />}>
          <Route path="/" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
