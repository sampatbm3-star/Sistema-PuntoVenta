import styled from "styled-components";
import { GlobalStyles,Routers,Sidebar } from "./index"
import { Device } from "./styles/breakpoints"

function App() {
  return (
    <Container>
      <GlobalStyles />
      <section className="contentSidebar"><Sidebar/></section>
      <section className="contentRouters"><Routers/></section>
      <section className="contentMenu">Menu</section>
    </Container>
  )
}

const Container = styled.main`
  display: grid;
  min-height: 100vh;

  /* MOVIL (default): 1 columna, menu fijo abajo */
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 60px;
  grid-template-areas:
    "routers"
    "menu";

  .contentSidebar {
    display: none;
    background-color: rgba(78, 45, 78, 0.5);
  }
  .contentMenu {
    grid-area: menu;
    background-color: rgba(53, 219, 11, 0.5);
  }
  .contentRouters {
    grid-area: routers;
    background-color: rgba(231, 13, 136, 0.5);
  }

  /* TABLET (>=768px): sidebar de iconos a la izquierda */
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "sidebar routers";

    .contentSidebar {
      display: block;
      grid-area: sidebar;
    }
    .contentMenu {
      display: none;
    }
    .contentRouters {
      grid-area: routers;
    }
  }

  /* LAPTOP (>=992px): sidebar expandido */
  @media ${Device.laptop} {
    grid-template-columns: 200px 1fr;
    grid-template-areas: "sidebar routers";
  }
`
export default App
