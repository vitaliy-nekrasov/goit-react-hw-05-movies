import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  border-bottom: ${p => p.theme.space[1]} solid ${p => p.theme.colors.hover};
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
  padding-bottom: ${p => p.theme.space[5]};
  padding-top: ${p => p.theme.space[4]};
`;
export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]};
  font-size: 26px;
`;
export const List = styled.ul`
  display: flex;
`;
export const ListItem = styled.li`
  margin-right: ${p => p.theme.space[3]};
`;
export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.button};
  padding: ${p => p.theme.space[3]} ${p => p.theme.space[4]}
    ${p => p.theme.space[3]} ${p => p.theme.space[4]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  border-radius: ${p => p.theme.space[3]};
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hover};
  }

  &.active {
    background-color: ${p => p.theme.colors.hover};
  }
`;
