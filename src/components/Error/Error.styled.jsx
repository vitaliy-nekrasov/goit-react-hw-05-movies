import styled from 'styled-components';

export const Message = styled.b`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.hover};
`;
