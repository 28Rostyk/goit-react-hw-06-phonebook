import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            id={id}
            number={number}
            onDeleteContact={removeContact}
          />
        );
      })}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};
