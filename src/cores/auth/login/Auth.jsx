import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {

  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (!user.success) return navigate('/login');
  })

  return children;
}

export default Auth