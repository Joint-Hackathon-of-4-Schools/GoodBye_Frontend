import React from "react";
import { Route, Routes } from "react-router-dom";
import SizeLayout from "./router/sizeLayout";
import Main from "./Main";

function App() {
  return (
    <Routes>
      <Route element={<SizeLayout/>}>
        <Route path="/" element={<Main/>}/>
      </Route>
    </Routes>
  );
}

export default App;
