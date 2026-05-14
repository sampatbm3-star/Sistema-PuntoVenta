import styled from "styled-components";
import { GiPadlock } from "react-icons/gi";

export function Footer() {
  return (
    <Container>
      <section className="lock">
        <GiPadlock />
        <span>
          Esta es una página segura de EDWARD-117. Si tienes dudas sobre la
          autenticidad de la web, comunícate con
          <br /> nosotros al 3531724841 o a través de nuestros medios digitales.
        </span>
      </section>
      <section className="derechos">
        <span>EDWARD-117</span>
        <div className="separador"></div>
        <span>Todos los derechos reservados</span>
        <div className="separador"></div>
        <span>© 2026 EDWARD-117</span>
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar todo horizontalmente */
  font-size: 13.8px;
  color: #91a4b7;
  gap: 8px;
  width: 100%;
  text-align: center; /* Centrar texto */

  .lock {
    border-bottom: 2px solid rgba(145, 164, 183, 0.2);
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
    width: fit-content;
  }

  .derechos {
    display: flex;
    justify-content: center; /* Centrar los derechos */
    gap: 30px; /* Espacio entre los textos */
    
    .separador {
      width: 1px;
      background-color: rgba(145, 164, 183, 0.3);
      height: 12px;
      align-self: center;
    }
    
    span {
      margin-top: 0;
    }
  }
`;
