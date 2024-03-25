import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>کتابخانه من</h1>
      {/*About - Books*/}
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/books">کتاب ها</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/about">درباره ما</Link>
      </nav>
    </div>
  );
};

export default App;


