import React from "react";
import { Route, Routes } from "react-router-dom";
import SizeLayout from "./router/sizeLayout";
import Main from "./Main";
import Bucket from "./Bucket";
import Recommend from "./Recommend";
import Combine from "./Combine";
import AIRecommned from "./AIRecommend";
import Balance from "./Balance";

function App() {
  return (
    <Routes>
      <Route element={<SizeLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/bucket" element={<Bucket />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/recommend/combine" element={<Combine />} />
        <Route path="/recommend/AI" element={<AIRecommned />} />
        <Route path="/recommend/Balance" element={<Balance />} />
      </Route>
    </Routes>
  );
}

export default App;
