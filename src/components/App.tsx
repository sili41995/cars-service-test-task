import GlobalStyles from 'components/GlobalStyles';
import Toast from 'components/Toast';
import PagePaths from 'constants/pagePaths';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import { FC, lazy } from 'react';

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const CarsPage = lazy(() => import('pages/CarsPage'));

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path={PagePaths.homePath} element={<SharedLayout />}>
          <Route index element={<div>HOME</div>} />
          <Route path={PagePaths.catalogPath} element={<CarsPage />} />
          <Route
            path={PagePaths.favoritesPath}
            element={<div>FAVORITES</div>}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toast />
      <GlobalStyles />
    </>
  );
};

export default App;
