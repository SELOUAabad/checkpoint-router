import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import DescriptionMovie from "./pages/DescriptionMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:id" element={<DescriptionMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
