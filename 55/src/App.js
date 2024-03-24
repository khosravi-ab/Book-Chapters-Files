import Navbar from "./components/Navbar";
import ContactsAll from './components/contacts/ContactsAll';
import './App.css';
import { useState } from "react";

const App=()=> {
  const [contacts,setContacts]=useState([]);
  const [loading,setLoading]=useState(true);
  return (
    <div className="App">
      <Navbar />
      <ContactsAll contacts={contacts} loading={loading}/>
    </div>

  );
}

export default App;
