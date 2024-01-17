import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import { Container, Header, Main, Section } from './SharedLayout.styled';

const SharedLayout: FC = () => {
  return (
    <>
      <Header>
        <Container></Container>
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
