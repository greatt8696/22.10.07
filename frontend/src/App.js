import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main, Shop } from "./page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
