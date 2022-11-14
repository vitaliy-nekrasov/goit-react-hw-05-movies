import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
  padding-top: ${p => p.theme.space[5]};
  padding-bottom: ${p => p.theme.space[5]};
  border-bottom: ${p => p.theme.space[1]} solid ${p => p.theme.colors.hover};
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: ${p => p.theme.space[4]};
`;
export const Item = styled.li``;
export const Image = styled.img`
  border-radius: ${p => p.theme.space[3]};
  border: ${p => p.theme.space[1]} solid ${p => p.theme.colors.hover};
  overflow: hidden;
  margin-bottom: ${p => p.theme.space[3]};
  min-width: 250px;
  max-height: 380px;
`;
export const Name = styled.p``;
export const Character = styled.p``;
export const Span = styled.span`
  color: ${p => p.theme.colors.hover};
`;
