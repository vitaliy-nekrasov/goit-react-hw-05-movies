import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  List,
  ListItem,
  StyledLink,
} from './AdditionalInformation.styled';

export function AdditionalInformation({ link }) {
  return (
    <Wrapper>
      <Title>Additional information</Title>
      <List>
        <ListItem>
          <StyledLink to="cast" state={{ from: link }}>
            Cast
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="reviews" state={{ from: link }}>
            Reviews
          </StyledLink>
        </ListItem>
      </List>
    </Wrapper>
  );
}

AdditionalInformation.propTypes = {
  link: PropTypes.object.isRequired,
};
