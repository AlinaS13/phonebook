import ContactSVG from 'assest/contactSVG';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { Button, Wrap, Contact } from './ContactsList.styled';

export const Contacts = () => {
  const { contacts, filter } = useSelector(state => state.contactsStore);
  const dispatch = useDispatch();
  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase().trim();
    return contacts.items.filter(contact => {
      return contact.name.toLowerCase().includes(normilizedFilter);
    });
  };

  const filterName = getVisibleContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul>
      {filterName.map(contact => (
        <li key={contact.id}>
          <Wrap>
            <ContactSVG></ContactSVG>
            <Contact>
              {contact.name}: {contact.phone}
            </Contact>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </Wrap>
        </li>
      ))}
    </ul>
  );
};
