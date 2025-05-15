import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./pages/Login"; // agora o componente tem export default

import GlobalStyles from "./global";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <LoginForm />
  </React.StrictMode>
);
