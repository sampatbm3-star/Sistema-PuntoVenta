import styled from "styled-components";

interface TitleProps {
  $paddingbottom?: string;
}

export const Title = styled.span<TitleProps>`
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  font-size: 30px;
  line-height: 28px;
  padding-bottom: ${(props) => props.$paddingbottom || "0px"};
`;
