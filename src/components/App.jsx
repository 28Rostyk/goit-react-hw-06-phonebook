import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filter-selector';
import {
  getAllContacts,
  getFilteredBooks,
} from 'redux/contacts/contacts-selector';

import css from './App.module.css';

const App = () => {
  const filteredContacts = useSelector(getFilteredBooks);
  const allContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normalizedTitle = name.toLowerCase();
    const result = allContacts.find(({ name }) => {
      return name.toLowerCase() === normalizedTitle;
    });
    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name, number)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.Box}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} contacts={allContacts} />

      <div className={css.ContactsBox}>
        <h2>Contacts</h2>

        {allContacts.length > 0 && (
          <Filter value={filter} handleChange={handleFilter} />
        )}

        <ContactList
          removeContact={handleDeleteContact}
          contacts={filteredContacts}
        />
        {allContacts.length === 0 && (
          <p className={css.notificationMessage}>
            There are no contacts in your phonebook
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
