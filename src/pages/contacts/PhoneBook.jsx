import React from 'react';
import { Wraper, Container, Title, TitleContact } from './PhoneBook.styled';
import { Form } from '../../components/form';
import { Contacts } from '../../components/contacts';
import { FilterContacts } from '../../components/filter-contacts';
// import { useSelector } from 'react-redux';
// import { getIsLoading } from '../../redux/contacts/selector';

export const PhoneBook = () => {
  // const isLoadingContacts = useSelector(getIsLoading);
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
        {/* {isLoadingContacts} */}
      </Wraper>
    </>
  );
};
