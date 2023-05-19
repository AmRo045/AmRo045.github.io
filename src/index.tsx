import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga4";

ReactGA.initialize("G-84MLTBQHRN");

NProgress.configure({
    showSpinner: false,
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
