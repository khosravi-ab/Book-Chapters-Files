import { createContext } from "react";

export const ContactContext = createContext({
  loading: false,
  setLoading: () => {},
  contact: {},
  setContact: () => {},
  contacts: [],
  setContacts: () => {},
  // errors: [],
  filteredContacts: [],
  setFilteredContacts: () => {},
  groups: [],
  onContactChange: () => {},
  deleteContact: () => {},
  createContact: () => {},
  contactSearch: () => {},
});
