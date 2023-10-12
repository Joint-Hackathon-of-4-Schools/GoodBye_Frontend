import React from "react";
import { Route, Routes } from "react-router-dom";
import SizeLayout from "./router/sizeLayout";
import Main from "./Main";
import Bucket from "./Bucket";
import Recommend from "./Recommend";
import Combine from "./Combine";
import AIRecommned from "./AIRecommend";
import Promotion from "./promotion";

function App() {
  return (
    <Routes>
      <Route element={<SizeLayout />}>
        <Route path="/" element={<Promotion />} />
        <Route path="/main" element={<Main />} />
        <Route path="/bucket" element={<Bucket />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/recommend/combine" element={<Combine />} />
        <Route path="/recommend/AI" element={<AIRecommned />} />
      </Route>
    </Routes>
  );
}

export default App;
