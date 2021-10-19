import { ContactItem } from "../../Contact";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import {
  useGetContactsQuery,
  useDelContactMutation,
} from "../../../redux/contactsSlice";

const ContactList = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const { data: contacts = [], isError, error } = useGetContactsQuery();
  const [deleteContact] = useDelContactMutation();

  const filteredContacts = getFiltered(filter, contacts);
  if (isError) return <div>An error has occurred! {error.data}</div>;

  return (
    <div>
      <ul>
        {filteredContacts.map((contact) => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={() => deleteContact(contact.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

const getFiltered = (filter, items) => {
  return filter
    ? items.filter((contact) => contact.name.toLowerCase().includes(filter))
    : items;
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
export default ContactList;
