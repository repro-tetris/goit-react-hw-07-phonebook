const STORAGE_NAME = "contacts";

export const loadContacts = () => {
  const contacts = localStorage.getItem(STORAGE_NAME);
  return contacts ? JSON.parse(contacts) : [];
};

export const saveContacts = (contacts) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(contacts));
};
