import {AddContact, ViewContact, ContactsAll, EditContact, Navbar, } from  "./components";
import { Navigate, Route, Routes,useNavigate } from "react-router-dom";
import './App.css';
import { useState, useEffect } from "react";
import { getAllContacts,  getAllGroups,  createContact, deleteContact, }  from "./services/contactService";
import { confirmAlert } from "react-confirm-alert";
import { COMMENT, CURRENTLINE, FOREGROUND, PURPLE, YELLOW } from "./helpers/color";
import { ContactContext } from "./context/contactContext";
import _ from "lodash";
// import { contactSchema } from "./validations/contactValidation";
import { useImmer } from "use-immer";

const App=()=> {
  const [loading, setLoading] = useImmer(false);
  const [contacts, setContacts] = useImmer([]);
  const [filteredContacts, setFilteredContacts] = useImmer([]);
  const [groups, setGroups] = useImmer([]);
  
  // const [errors, setErrors] = useState([]);
 

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const  { data: contactsData } = await   getAllContacts();
        const  { data: groupsData } = await   getAllGroups();

        setContacts(contactsData);
        setFilteredContacts(contactsData);
        setGroups(groupsData);
        setLoading(false);
} catch (err) {
        console.log(err.message);
        setLoading(false);
}

    };

    fetchData();
}, []);


const createContactForm = async (values) => {
  try {
    setLoading((draft) => !draft);
    const { status, data } = await createContact(values);
    if (status === 201) {
      setContacts((draft) => {
        draft.push(data);
      });
      setFilteredContacts((draft) => {
        draft.push(data);
      });
      setLoading((prevLoading) => !prevLoading);
      navigate("/contacts");
    }
  } catch (err) {
    console.log(err.message);
    setLoading((prevLoading) => !prevLoading);
  }
};





const  confirmDelete = (contactId, contactFullname) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div  dir="rtl"  style={{ backgroundColor: CURRENTLINE, 
            border: `1px solid ${PURPLE}`,   borderRadius: "1em",   }}
          className="p-4"
        >
          <h1 style={{ color: YELLOW }}>پاک کردن مخاطب</h1>
          <p style={{ color: FOREGROUND }}>
            مطمئنی که میخواهی مخاطب {contactFullname} را پاک کنی ؟
          </p>
          <button  onClick={() => {removeContact(contactId); onClose(); }}
            className="btn mx-2"           style={{ backgroundColor: PURPLE }}
          >
            مطمئن هستم
          </button>
          <button  onClick={onClose}  className="btn" style={{backgroundColor: COMMENT}}
          >
            انصراف
          </button>
        </div>
      );
    },
  });
};

const removeContact = async (contactId) => {
  const contactsBackup = [...contacts];
  try {
    setContacts((draft) => contacts.filter((c) => c.id !== contactId));
    setFilteredContacts((draft) =>
      contacts.filter((c) => c.id !== contactId)
    );
    const { status } = await deleteContact(contactId);
    if (status !== 200) {
      setContacts(contactsBackup);
      setFilteredContacts(contactsBackup);
    }
  } catch (err) {
    console.log(err.message);
    setContacts(contactsBackup);
    setFilteredContacts(contactsBackup);
  }
};



const contactSearch = _.debounce((query) => {
  if (!query) return setFilteredContacts([...contacts]);
  setFilteredContacts((draft) =>
    draft.filter((c) =>
      c.fullname.toLowerCase().includes(query.toLowerCase())
    )
  );
}, 1000);



  return (
    <ContactContext.Provider  value={{
      loading,
     setLoading,
     contacts,
     setContacts,
     filteredContacts,
     setFilteredContacts,
     groups,
    //  errors,
     deleteContact: confirmDelete,
     createContact: createContactForm,
     contactSearch,
   }}
>
        <div className="App">
           <Navbar />
           <Routes>
              <Route path="/" element={<Navigate to="/contacts" />} />
              <Route path="/contacts" element={<ContactsAll />} />
              <Route path="/contacts/add" element={<AddContact />} />
              <Route path="/contacts/:contactId" element={< ViewContact />} />
              <Route path="/contacts/edit/:contactId" element={<EditContact />} />
           </Routes>
       </div>
    </ContactContext.Provider>
  );
}

export default App;
