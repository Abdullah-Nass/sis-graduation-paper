import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from "react";
import "./App.js";

import LocaleProvider from "./components/LocaleProvider";
import Root from "./components/Root";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocaleProvider>
      <Root />
    </LocaleProvider>
  </React.StrictMode>,
);
