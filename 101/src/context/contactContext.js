import { createContext } from "react";

export const ContactContext = createContext({
  loading: false,
  setLoading: () => {},
  contact: {},
  setContact: () => {},
  contacts: [],
  setContacts: () => {},
  filteredContacts: [],
  setFilteredContacts: () => {},
  errors: [],
  groups: [],
  onContactChange: () => {},
  deleteContact: () => {},
  createContact: () => {},
  contactSearch: () => {},
});
