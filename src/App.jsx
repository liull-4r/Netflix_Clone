// import RowCollect from "./Components/Row/RowCollect";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>

      {/* <RowCollect /> */}
    </div>
  );
}

export default App;
