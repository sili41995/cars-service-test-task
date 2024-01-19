import { Messages } from 'constants/index';
import PagePaths from 'constants/pagePaths';
import { FC, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { toasts } from 'utils';

const NotFoundPage: FC = () => {
  useEffect(() => {
    toasts.errorToast(Messages.notFound);
  });

  return <Navigate to={PagePaths.homePath} />;
};

export default NotFoundPage;
