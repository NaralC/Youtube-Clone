import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <div className="w-full min-h-screen">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
};

export default App;
