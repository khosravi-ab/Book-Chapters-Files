import {AddContact, ViewContact, ContactsAll, EditContact, Navbar, } from  "./components";
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import { useState } from "react";

const App=()=> {
  const [contacts,setContacts]=useState([]);
  const [loading,setLoading]=useState(true);
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
