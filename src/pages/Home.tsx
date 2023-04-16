import { FC } from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <div className="">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Home;
