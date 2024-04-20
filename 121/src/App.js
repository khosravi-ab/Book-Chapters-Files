import PortalTest from "./components/PortalTest";
import { useState } from "react";
import "./App.css";
import MyForm from "./components/MyForm";
// import names from "./names"
function App() {
  const [names, setName] = useState(null);
  
  const onLoad = async () => {
    const names = (await import("./names")).default;
    const makeUpperCase = (
      await import("./helper" /*webpackChunkName: "helpers"*/)
    ).makeUpperCase;

    setName(makeUpperCase(names));
  };

  return (
    <div className="App">
      <h3>ReactJs Course Season 12</h3>
      <hr color="tomato" />
      <PortalTest />
      <MyForm />
      <hr color="cyan" />
      <button onClick={onLoad}>Load</button>
      {JSON.stringify(names)}
    </div>
  );
}

export default App;
