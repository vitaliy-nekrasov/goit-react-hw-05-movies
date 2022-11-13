import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
  padding-top: ${p => p.theme.space[5]};
  padding-bottom: ${p => p.theme.space[5]};
  border-bottom: ${p => p.theme.space[1]} solid ${p => p.theme.colors.hover};
`;
export const List = styled.ul``;
export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;
export const Author = styled.h4`
  margin-bottom: ${p => p.theme.space[3]};
`;
export const Text = styled.p``;
export const Span = styled.span`
  color: ${p => p.theme.colors.hover};
`;
