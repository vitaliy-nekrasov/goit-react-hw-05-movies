import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-top: ${p => p.theme.space[5]};
  padding-bottom: ${p => p.theme.space[5]};
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.hover};
  padding-bottom: ${p => p.theme.space[5]};
  text-align: center;
  text-shadow: 5px 4px 0px rgba(255, 255, 255, 0.168);
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${p => p.theme.space[4]};
`;

export const Poster = styled.img``;

export const FilmTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  padding-top: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[4]};
`;

export const StyledLink = styled(Link)`
  background-color: ${p => p.theme.colors.filmCard};
  border-radius: 10px;
  overflow: hidden;
  color: ${p => p.theme.colors.black};
  transition: box-shadow 250ms linear, transform 250ms linear;

  &:hover,
  &:focus {
    box-shadow: 8px 8px 8px 1px rgba(0, 0, 0, 0.29);
    transform: scale(1.05);
  }
`;
