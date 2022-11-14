import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[5]};
`;

export const Item = styled.li`
  background-color: ${p => p.theme.colors.filmCard};
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 250ms linear, transform 250ms linear;

  &:hover,
  &:focus {
    box-shadow: 8px 8px 8px 1px rgba(0, 0, 0, 0.29);
    transform: scale(1.05);
  }
`;

export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.black};
`;

export const Poster = styled.img`
  min-height: 500px;
`;

export const FilmTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  padding-top: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[4]};
`;
