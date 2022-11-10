import {
  Nav,
  List,
  ListItem,
  Header,
  StyledLink,
  Main,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

export function SharedLayout() {
  return (
    <div>
      <Header>
        <Nav>
          <List>
            <ListItem>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/movies">Movies</StyledLink>
            </ListItem>
          </List>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
