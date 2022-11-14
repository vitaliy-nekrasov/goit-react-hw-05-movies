import {
  Nav,
  List,
  ListItem,
  Header,
  StyledLink,
  Main,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function SharedLayout() {
  return (
    <div>
      <Suspense fallback={null}>
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
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Main>
      </Suspense>
    </div>
  );
}
