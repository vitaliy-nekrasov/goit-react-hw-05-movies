import { Message } from './Error.styled';
import { Box } from 'components/Box/Box';

export function Error({ message }) {
  return (
    <Box display="flex" justifyContent="center">
      <Message>
        Sorry, something wrong! <br /> {message}! :(
      </Message>
    </Box>
  );
}
