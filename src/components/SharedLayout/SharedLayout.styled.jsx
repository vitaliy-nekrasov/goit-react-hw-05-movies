import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]};
  }
`;

export const Header = styled.header`
  padding-top: ${p => p.theme.space[5]};
  padding-bottom: ${p => p.theme.space[5]};
  background-color: ${p => p.theme.colors.header};
  border-bottom: ${p => p.theme.space[1]} solid #d6d6d6;
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

export const Main = styled.main`
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
  margin-left: auto;
  margin-right: auto;
  background-color: ${p => p.theme.colors.header};
  height: 100%;
`;
