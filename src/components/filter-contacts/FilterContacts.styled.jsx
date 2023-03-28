import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
export const Wrap = styled.div`
  width: 350px;

  position: relative;
`;

export const Input = styled.input`
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
export const WrapSVG = styled.div`
  position: absolute;
  left: 93%;
  bottom: 15%;
`;
