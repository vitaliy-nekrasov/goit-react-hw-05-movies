import { Message } from './Error.styled';
import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';

export function Error({ message }) {
  return (
    <Box display="flex" justifyContent="center">
      <Message>
        Sorry, something wrong! <br /> {message}! :(
      </Message>
    </Box>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
