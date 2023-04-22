import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStoreHook, Provider } from "react-redux";
import { YoutubeReducer } from "./store/reducer/youtube-reducer";
import { createStore } from "redux";

const store = createStore(YoutubeReducer);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App setYoutubeClientLoaded={() => {}}/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
