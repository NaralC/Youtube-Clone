import { FC, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import Home from "./pages/Home";

const App: FC = () => {
  
  useEffect(() => {
    gapi.load("client", () => {
      gapi.client.setApiKey("AIzaSyCtnDA4VWhyrFPXquFNm9pu1oMA-qnxdwE");
      return gapi.client.load("youtube", "v3", () => {
        return (gapi.client as any).youtube.videos
          .list({
            part: ["snippet", "statistics", "contentDetails"],
            chart: "mostPopular",
            regionCode: "gb",
          })
          .then(
            (response: any) => {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
            },
            (err: any) => {
              console.error("Execute error", err);
            }
          );
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

export default App;
