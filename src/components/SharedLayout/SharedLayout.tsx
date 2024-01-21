import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import { navLinks } from 'constants/index';

const SharedLayout: FC = () => {
  return (
    <>
      <Header>
        <Container>
          <NavigationBar navLinks={navLinks} />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
    </>
  );
};
export default SharedLayout;
