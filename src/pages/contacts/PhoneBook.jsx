import React from 'react';
import { Wraper, Container, Title, TitleContact } from './PhoneBook.styled';
import { Form } from '../../components/form';
import { Contacts } from '../../components/contacts';
import { FilterContacts } from '../../components/filter-contacts';

export const PhoneBook = () => {
  return (
    <>
      <Wraper>
        <Container>
          <Title>Phone book</Title>
          <Form />
          <TitleContact>Contacts</TitleContact>
          <FilterContacts />
          <Contacts />
        </Container>
      </Wraper>
    </>
  );
};
