import * as React from "react";
import ReactDOM from "react-dom/client";
import type {} from "redux-thunk/extend-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./app/App";
import { Provider } from "react-redux";
import STORE from "./store/store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={STORE}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

serviceWorkerRegistration.register();
