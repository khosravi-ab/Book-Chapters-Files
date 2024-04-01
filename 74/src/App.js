import {AddContact, ViewContact, ContactsAll, EditContact, Navbar, } from  "./components";
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

const App=()=> {
  const [contacts,setContacts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await axios.get("http://localhost:9000/contacts");
        const { data: groupsData } = await axios.get("http://localhost:9000/groups");
        setContacts(contactsData);
        setGroups(groupsData);
        setLoading(false);
} catch (err) {
        console.log(err.message);
        setLoading(false);
}

    };

    fetchData();
}, []);



  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/contacts" />} />
      <Route  path="/contacts"    element={<ContactsAll contacts={contacts } loading={loading} />} />
      <Route path="/contacts/add" element={<AddContact />} />
      <Route path="/contacts/:contactId" element={< ViewContact />} />
      <Route path="/contacts/edit/:contactId" element={<EditContact />} />
    </Routes>
  </div>
  );
}

export default App;
