import    {AddContact, ContactOnly, ContactsAll, EditContact, Navbar, ViewContact}    from "./components";
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
