import { ContactItem } from "../../Contact";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { delContact } from "../../../redux/contacts/items/contacts-item-actions";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = getFiltered(filter, contacts);

  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {filteredContacts.map((contact) => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={() => dispatch(delContact(contact.id))}
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
