import {AddContact, ViewContact, ContactsAll, EditContact, Navbar, } from  "./components";
import { Navigate, Route, Routes,useNavigate } from "react-router-dom";
import './App.css';
import { useState, useEffect } from "react";

import { getAllContacts, getAllGroups,createContact } from "./services/contactService";

const App=()=> {
  const [contacts,setContacts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [groups, setGroups] = useState([]);
  const [forceRender, setForceRender] = useState(false);
  const [contact, setContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const  { data: contactsData } = await   getAllContacts();
        const  { data: groupsData } = await   getAllGroups();

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

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);

      const { data: contactsData } = await getAllContacts();

      setContacts(contactsData);

      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  fetchData();
}, [forceRender]);


const createContactForm = async (event) => {
  event.preventDefault();
  try {
    const { status } = await createContact(contact);

    if (status === 201) {
      setContact({});
      setForceRender(!forceRender);
      navigate("/contacts");
    }
  } catch (err) {
    console.log(err.message);
  }
};


const  onContactChange = (event) => {
  setContact({ ...contact,  [event.target.name]: event.target.value,  });
};


  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/contacts" />} />
      <Route  path="/contacts"    element={<ContactsAll contacts={contacts } loading={loading} />} />
      <Route path="/contacts/add" element={ <AddContact  loading={loading}    onContactChange={ onContactChange}    contact={contact}
              groups={groups}      createContactForm={createContactForm}   />} />
      <Route path="/contacts/:contactId" element={< ViewContact />} />
      <Route  path="/contacts/edit/:contactId" element={<EditContact   forceRender={forceRender}  setForceRender={setForceRender}/>}/>

    </Routes>
  </div>
  );
}

export default App;
