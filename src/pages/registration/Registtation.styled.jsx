import styled from 'styled-components';

export const Wraper = styled.div`
  margin: 100px auto;
  padding: 0px;
  max-width: 360px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 90px 0px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 42px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  text-align: start;
  font-size: 22px;
  margin-bottom: 20px;
`;
export const ButtonRegis = styled.button`
  width: 150px;
  height: 40px;
  color: #00ffc0;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid;
  border-radius: 10px;

  margin-bottom: 25px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: lightblue;
    background: #00ffc0;
    box-shadow: 0 0 10px 0 rgb(35 10 108) inset, 0 0 20px 2px rgb(52 255 22);
    /* border: 3px solid #fd5103; */
  }
`;

export const InputRegis = styled.input`
  font-family: inherit;
  color: #fff;
  font-size: 18px;
  width: 200px;
  height: 20px;
  background-color: transparent;
  border: none;
  border-bottom: #fff solid;
  margin-bottom: 20px;

  &:hover,
  :focus {
    outline: none;
  }
`;
