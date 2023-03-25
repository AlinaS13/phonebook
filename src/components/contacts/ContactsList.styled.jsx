import styled from 'styled-components';

export const Button = styled.button`
  width: 80px;
  height: 30px;
  color: #00ffc0;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: lightblue;
    background: #00ffc0;
    box-shadow: 0 0 10px 0 rgb(35 10 108) inset, 0 0 20px 2px rgb(52 255 22);
    /* border: 3px solid #fd5103; */
  }
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const Contact = styled.p`
  font-size: 15px;
  font-weight: 600;
`;
