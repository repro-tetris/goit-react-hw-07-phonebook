import PropTypes from "prop-types";
import { StyledContact } from "./ContactItem.styled";

function ContactItem({ contact: { name, number }, onDelete }) {
  return (
    <StyledContact>
      {name}: {number}
      <button onClick={onDelete}>delete</button>
    </StyledContact>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};

export default ContactItem;
