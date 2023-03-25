import SearchSVG from 'assest/searchSVG';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contactSlice';
import { FilterWrap, Input, Wrap, WrapSVG } from './FilterContacts.styled';

export const FilterContacts = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleChange = event => {
    // onChangeInput(event.target.value);
    dispatch(filterContact(event.target.value));
  };
  return (
    <FilterWrap>
      <h3>Find contacts by name</h3>
      <Wrap>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          defaultValue={filter}
        />
        <WrapSVG>
          <SearchSVG></SearchSVG>
        </WrapSVG>
      </Wrap>
    </FilterWrap>
  );
};
