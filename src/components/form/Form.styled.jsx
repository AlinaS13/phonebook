import styled from 'styled-components';
export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  width: 150px;
  height: 40px;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #fff;
    background: #00ffc0;
    box-shadow: 0 0 10px 0 rgb(35 10 108) inset, 0 0 20px 2px rgb(52 255 22);
  }
`;

export const InputForm = styled.input`
  font-family: inherit;
  color: #fff;
  font-size: 18px;
  width: 100%;
  height: 20px;
  background-color: transparent;
  border: none;
  border-bottom: #fff solid;

  &:hover,
  :focus {
    outline: none;
  }
`;
