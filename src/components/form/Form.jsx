import React from 'react';
import { Button, FormWrap, InputForm } from './Form.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export const Form = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.contactsStore.contacts);
  const { contacts } = useSelector(state => state.contactsStore);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      phone,
    };
    const saveContact = contacts.items.find(contact => contact.name === name);
    if (saveContact) {
      return alert('Contact is already added!');
    }
    dispatch(addContact(contact));
    reset(event);
  };

  const onNameChange = event => {
    setName(event.target.value);
  };

  const onNumberChange = event => {
    setPhone(event.target.value);
  };

  const reset = event => {
    setPhone('');
    setName('');
    event.target.reset();
  };
  return (
    <FormWrap>
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onNameChange}
        />
        <h3>Phone</h3>
        <InputForm
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={onNumberChange}
        />
        <Button disabled={isLoading}>Add contact</Button>
      </form>
    </FormWrap>
  );
};
