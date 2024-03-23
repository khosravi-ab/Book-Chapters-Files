import Navbar from "./components/Navbar";
import ContactsAll from './components/contacts/ContactsAll';
import './App.css';

const App=()=> {
  return (
    <div className="App">
      <Navbar />
      <ContactsAll/>
    </div>

  );
}

export default App;
