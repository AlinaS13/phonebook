import styled from 'styled-components';
export default function NotFound() {
  return (
    <div>
      <Title>Oops, this page is not found💔</Title>
    </div>
  );
}

export const Title = styled.h1`
  text-align: center;
  margin-top: 250px;
  font-size: 42px;
`;
