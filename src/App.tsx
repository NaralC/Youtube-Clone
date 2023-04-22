import { FC, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import Home from "./pages/Home";
import { getVideos } from "./store/api/api";
import { connect } from "react-redux";
import { IVideoState } from "./store/interfaces/IVideoState";
import { YoutubeClientLoaded } from "./store/action-creators/action-creator";

interface IApp {
  isYoutubeClientLoaded: boolean,
  setYoutubeClientLoaded: () => void;
}

const App: FC<IApp> = ({ isYoutubeClientLoaded, setYoutubeClientLoaded }) => {

  console.log(isYoutubeClientLoaded);

  useEffect(() => {
    gapi.load("client", () => {
      gapi.client.setApiKey("AIzaSyCtnDA4VWhyrFPXquFNm9pu1oMA-qnxdwE");
      return gapi.client.load("youtube", "v3", () => {
        ;
        setYoutubeClientLoaded();

      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

const mapStatesToProps = (state: IVideoState) => {
  return {
    isYoutubeClientLoaded: state.isYoutubeClientLoaded,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setYouTubeClientLoaded: () => { dispatch(YoutubeClientLoaded); },
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(App);
