import styled from "styled-components";

export function HomeTemplate() {
  return (
    <Container>
      <span>HomeTemplate</span>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${(props) => props.theme.text};
`;