import PagePaths from 'constants/pagePaths';
import { FC, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { toasts } from 'utils';

const NotFoundPage: FC = () => {
  useEffect(() => {
    toasts.errorToast('The request URL was not found');
  });

  return <Navigate to={PagePaths.homePath} />;
};

export default NotFoundPage;
