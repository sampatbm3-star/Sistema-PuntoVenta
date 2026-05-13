import styled from "styled-components";

// Definimos la interfaz
interface IconoProps {
  $color?: string;
}

// Le pasamos la interfaz al styled-component
export const Icono = styled.span<IconoProps>`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.$color || "inherit"};
`;
