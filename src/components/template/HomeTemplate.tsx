import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore";

export function HomeTemplate() {
  const { cerrarSesion } = useAuthStore();

  return (
    <Container>
      <span>HomeTemplate</span>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
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
