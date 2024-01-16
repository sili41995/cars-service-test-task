import PagePaths from 'constants/pagePaths';
import { Navigate } from 'react-router-dom';

const NotFoundPage = () => <Navigate to={PagePaths.homePath} />;

export default NotFoundPage;
