import Navbar from "./components/Navbar";
import ContactsAll from './components/contacts/ContactsAll';
import './App.css';
import { useState } from "react";

const App=()=> {
  const [contacts,setContacts]=useState([]);
  return (
    <div className="App">
      <Navbar />
      <ContactsAll contacts={contacts}/>
    </div>

  );
}

export default App;
