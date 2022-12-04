import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

  const user = useSelector(state => state.user);

  if (!user.success) return <Navigate to="/login"/>;

  return <Outlet />;
}

export default ProtectedRoutes;