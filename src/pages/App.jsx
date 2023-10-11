import React from "react";
import { Route, Routes } from "react-router-dom";
import SizeLayout from "./router/sizeLayout";
import Main from "./Main";
import Bucket from "./Bucket";

function App() {
  return (
    <Routes>
      <Route element={<SizeLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/bucket" element={<Bucket />} />
      </Route>
    </Routes>
  );
}

export default App;
