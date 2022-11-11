import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${p => p.theme.space[4]};
  color: ${p => p.theme.colors.filmCard};
`;

export const Head = styled.div`
  display: flex;
  border-bottom: ${p => p.theme.space[1]} solid ${p => p.theme.colors.hover};
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
  padding-bottom: ${p => p.theme.space[4]};
`;

export const Poster = styled.img`
  min-height: 450px;
  min-width: 350px;
  border-radius: 8px;
  overflow: hidden;
`;

export const MovieInfo = styled.div`
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[3]};
`;

export const Score = styled.p`
  margin-bottom: ${p => p.theme.space[4]};
  font-size: 18px;
`;

export const Overview = styled.h3`
  margin-bottom: ${p => p.theme.space[3]};
  font-size: 26px;
`;

export const OverviewText = styled.p`
  margin-bottom: ${p => p.theme.space[4]};
  font-size: 18px;
`;

export const GenresTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[3]};
  font-size: 26px;
`;

export const Genres = styled.p`
  font-size: 18px;
`;
