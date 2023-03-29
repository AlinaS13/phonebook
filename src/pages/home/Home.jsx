import styled from 'styled-components';
export default function Home() {
  return (
    <Wrap>
      <Title>Welcome</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Wrap>
  );
}
export const Wrap = styled.div`
  margin: 0, auto;
  padding: 40px;
`;
export const Title = styled.h1`
  text-align: center;
  margin-top: 100px;
  font-size: 42px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 30px;
`;
