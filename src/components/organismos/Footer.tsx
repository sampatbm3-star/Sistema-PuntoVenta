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
  align-items: center;
  font-size: 13.8px;
  color: #91a4b7;
  gap: 12px;
  width: 100%;
  text-align: center;
  padding: 0 20px; /* Margen lateral para móviles */

  .lock {
    border-bottom: 2px solid rgba(145, 164, 183, 0.2);
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 8px;
    width: 100%;
    max-width: 1000px; /* Suficiente para una sola línea en laptop */
    
    @media (max-width: 900px) {
      max-width: 500px; /* Se rompe en 2 líneas en pantallas medianas/chicas */
    }
    
    span {
      line-height: 1.4;
    }
  }

  .derechos {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: nowrap; /* Forzamos una sola línea para los créditos */
    
    @media (max-width: 900px) {
      gap: 10px;
      font-size: 11px; /* Un poco más chico en móvil para que quepa en una línea */
    }
    
    @media (max-width: 480px) {
      gap: 5px;
      font-size: 10px;
    }
    
    .separador {
      width: 1px;
      background-color: rgba(145, 164, 183, 0.3);
      height: 12px;
      align-self: center;
    }
    
    span {
      margin-top: 0;
      white-space: nowrap;
    }
  }
`;
