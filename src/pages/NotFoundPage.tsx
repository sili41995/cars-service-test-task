import PagePaths from 'constants/pagePaths';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toasts } from 'utils';

const NotFoundPage = () => {
  useEffect(() => {
    toasts.errorToast('The request URL was not found');
  });

  return <Navigate to={PagePaths.homePath} />;
};

export default NotFoundPage;
