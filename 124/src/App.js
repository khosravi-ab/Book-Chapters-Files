import React, { useState, lazy, Suspense } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
// import PortalTest from "./components/PortalTest";
import MyForm from "./components/MyForm";

// import names from "./names";
// import { makeUpperCase } from "./helper";
import "./App.css";

const MyComponent = lazy(() => import("./components/MyComponent"));

function App() {
  const [names, setName] = useState(null);

  const onLoad = async () => {
    const names = (await import("./names")).default;
    const makeUpperCase = (
      await import("./helper" /*webpackChunkName: "helpers"*/)
    ).makeUpperCase;

    setName(makeUpperCase(names));
  };

  // throw new Error("خودمان خطا ایجاد کردیم");

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>دوره جامع ری اکت | فصل دوازدهم</title>
        </Helmet>
        <h3>ReactJs Course Season 12</h3>
        <hr color="tomato" />
        {/* <PortalTest /> */}
        <MyForm />
        <hr color="cyan" />
        <button onClick={onLoad}>Load</button>
        {JSON.stringify(names)}
        <hr color="blue" />
        {names && (
          <Suspense fallback={<div>Loading...</div>}>
            <MyComponent />
          </Suspense>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;
