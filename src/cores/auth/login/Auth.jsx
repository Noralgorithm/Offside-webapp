import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  if (!user.success) return <Navigate to="/login"/>;

  return children;
}

export default Auth