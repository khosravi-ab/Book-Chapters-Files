import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import ErrorBoundary from "./components/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>مشکلی پیش آمده 💣 </p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>سعی مجدد</button>
    </div>
  );
};


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<ErrorBoundary>*/}
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      /* fallback={<div>مشکلی هست...</div>} */
      onReset={() => {
        //Reset the state of your app
      }}
    >
      <App />
    </ErrorBoundary>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);


reportWebVitals();
