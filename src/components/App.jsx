import React from 'react';
import { Wraper, Container, Title, TitleContact } from './App.styled';
import { Form } from './form';

import { Contacts } from './contacts';
import { FilterContacts } from './filter-contacts';
import { NavBar } from './header/Header';

// import axios from 'axios';

export const App = () => {
  return (
    <>
      <NavBar></NavBar>
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
