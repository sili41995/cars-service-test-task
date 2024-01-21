import GlobalStyles from 'components/GlobalStyles';
import Toast from 'components/Toast';
import PagePaths from 'constants/pagePaths';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import { FC, lazy } from 'react';

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const HomePage = lazy(() => import('pages/HomePage'));

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path={PagePaths.homePath} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PagePaths.catalogPath} element={<CatalogPage />} />
          <Route path={PagePaths.favoritesPath} element={<FavoritesPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toast />
      <GlobalStyles />
    </>
  );
};

export default App;
