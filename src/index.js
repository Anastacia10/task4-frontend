import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RegistrationPage, AuthorizationPage, UserAccountPage } from "./pages";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAccountPage></UserAccountPage>
  </React.StrictMode>
);

