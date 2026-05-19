import styled from "styled-components";
import { Icono } from "../../index";

interface BtnsaveProps {
  funcion?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  titulo?: string;
  bgcolor?: string;
  icono?: React.ReactNode;
  url?: string;
  color?: string;
  disabled?: boolean;
  width?: string;
}

export function Btnsave({
  funcion,
  titulo,
  bgcolor,
  icono,
  url,
  color,
  disabled,
  width,
}: BtnsaveProps) {
  return (
    <Container
      $width={width}
      disabled={disabled}
      $color={color}
      $bgcolor={bgcolor}
      onClick={funcion}
      type="button"
    >
      <section className="content">
        {icono && <Icono $color={color}>{icono}</Icono>}
        {titulo && (
          <span className="btn">
            {url ? (
              <a href={url} target="_blank" rel="noreferrer">
                {titulo}
              </a>
            ) : (
              titulo
            )}
          </span>
        )}
      </section>
    </Container>
  );
}

// Aquí definimos los tipos para los estilos (transient props con $)
const Container = styled.button<{ $bgcolor?: string; $color?: string; $width?: string }>`
  font-weight: 700;
  display: flex;
  font-size: 15px;
  padding: 10px 25px;
  border-radius: 16px;
  background-color: ${(props) => props.$bgcolor || "#000"};
  border: 2px solid rgba(50, 50, 50, 0.2);
  border-bottom: 5px solid rgba(50, 50, 50, 0.2);
  transform: translate(0, -3px);
  cursor: pointer;
  transition: 0.2s;
  transition-timing-function: linear;
  color: ${(props) => (props.$color ? `rgb(${props.$color})` : "#fff")};
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$width || "auto"};

  .content {
    display: flex;
    gap: 12px;
  }

  &:active {
    transform: translate(0, 0);
    border-bottom: 2px solid rgba(50, 50, 50, 0.5);
  }

  &[disabled] {
    background-color: #646464;
    cursor: no-drop;
    box-shadow: none;
  }
`;
