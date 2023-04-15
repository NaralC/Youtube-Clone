import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

const App: FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
};

export default App;
