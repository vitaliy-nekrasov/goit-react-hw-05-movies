import {
  Wrapper,
  Title,
  List,
  ListItem,
  StyledLink,
} from './AdditionalInformation.styled';

export function AdditionalInformation() {
  return (
    <Wrapper>
      <Title>Additional information</Title>
      <List>
        <ListItem>
          <StyledLink to="cast">Cast</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="reviews">Reviews</StyledLink>
        </ListItem>
      </List>
    </Wrapper>
  );
}
