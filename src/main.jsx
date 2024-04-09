import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RepositoriesProvider from "./context/RepositoriesContext.jsx";
import ShowProvider from "./context/ShowContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RepositoriesProvider>
    <ShowProvider>
      <App />
    </ShowProvider>
  </RepositoriesProvider>
);
